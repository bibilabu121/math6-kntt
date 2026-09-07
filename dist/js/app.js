/**
 * TOÁN 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nền tảng Học Tập, Lý Thuyết SGK, Sổ Tay Công Thức, Bộ Đề Thi Chuẩn & Lịch Sử
 * Tuân thủ nghiêm ngặt context.md
 */

import { CURRICULUM } from './data/curriculum.js';
import { QUESTION_BANK } from './data/questions.js';
import { EXAM_SUITES, EXAM_FORMATS } from './data/exams.js';
import { THEORY_DATA } from './data/theory.js';
import { FORMULA_HANDBOOK } from './data/handbook.js';
import { getLearningHistory, saveLearningRecord, clearLearningHistory, clearExamHistoryOnly, calculateGradeStatus, getTargetHistory, getTargetBestScore } from './utils/storage.js';
import { prepareSessionQuestions, shuffleQuestionOptions } from './utils/shuffler.js';
import { generateRandomQuestion } from './utils/variations.js';
import { sanitizeMathText, renderKatexInContainer, formatMarkdown } from './utils/renderer.js';

// Visual Widgets
import { NumberLineWidget } from './widgets/NumberLineWidget.js';
import { FractionBarWidget } from './widgets/FractionBarWidget.js';
import { PictogramWidget } from './widgets/PictogramWidget.js';
import { BarChartWidget } from './widgets/BarChartWidget.js';
import { GeometryWidget } from './widgets/GeometryWidget.js';

class Math6App {
  constructor() {
    this.state = {
      activeVolume: 1,
      theoryVolume: 1,
      theoryMode: 'scroll', // 'scroll' | 'slide'
      theorySlideIndex: 0,
      activeTheoryChapter: null,
      handbookCategory: 'all',
      selectedExamFormat: 'FORMAT_45MIN', // 'FORMAT_45MIN' (30c/45p) | 'FORMAT_60MIN' (40c/60p)
      examPeriodFilter: 'all', // 'all' | 'GK1' | 'CK1' | 'GK2' | 'CK2'
      examProvinceFilter: 'all', // 'all' | province name
      currentView: 'curriculum', // 'theory' | 'curriculum' | 'exams' | 'handbook' | 'history' | 'session' | 'result'
      theme: localStorage.getItem('math6_theme') || 'dark',

      // Session state
      session: {
        mode: 'practice', // 'practice' | 'exam'
        title: '',
        topicId: null,
        chapterId: null,
        questions: [],
        currentIndex: 0,
        userAnswers: {}, // { [qId]: answer }
        flagged: new Set(),
        hintsRevealed: {}, // { [qId]: number (0, 1, 2) }
        timeRemaining: 0,
        initialDurationSeconds: 0,
        timerTimerId: null,
        isSubmitted: false,
        score: 0,
        bloomStats: null
      }
    };

    this.init();
  }

  init() {
    this.applyTheme(this.state.theme);
    this.bindEvents();
    this.renderCurriculum();
    this.renderTheory(this.state.theoryVolume);
    this.renderExamSuites();
    this.renderHandbook('all');
    this.renderHistory();
    this.showView('curriculum');
    this.refreshIcons();
  }

  refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('math6_theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = `<i data-lucide="${theme === 'dark' ? 'sun' : 'moon'}"></i>`;
      this.refreshIcons();
    }
  }

  bindEvents() {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(nextTheme);
      });
    }

    // Nav 5 buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.currentTarget.getAttribute('data-view');
        if (view) {
          this.showView(view);
        }
      });
    });

    // Curriculum Volume tabs (Tập 1 / Tập 2)
    document.querySelectorAll('#view-curriculum .volume-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('#view-curriculum .volume-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.state.activeVolume = parseInt(e.currentTarget.getAttribute('data-volume'), 10);
        this.renderCurriculum();
      });
    });

    // Theory Volume tabs (Tập 1 / Tập 2)
    document.querySelectorAll('#theory-volume-tabs .volume-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('#theory-volume-tabs .volume-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.state.theoryVolume = parseInt(e.currentTarget.getAttribute('data-vol'), 10);
        this.state.activeTheoryChapter = null;
        this.renderTheory(this.state.theoryVolume);
      });
    });

    // Handbook category filters
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const cat = e.currentTarget.getAttribute('data-cat');
        this.state.handbookCategory = cat;
        this.renderHandbook(cat);
      });
    });

    // Theory Mode switcher (Scroll vs Slide)
    document.querySelectorAll('#theory-mode-switch .mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.currentTarget.getAttribute('data-mode');
        this.setTheoryMode(mode);
      });
    });

    // Exam Period filter tabs (GK1, CK1, GK2, CK2, all)
    document.querySelectorAll('#exam-period-tabs .period-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('#exam-period-tabs .period-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.state.examPeriodFilter = e.currentTarget.getAttribute('data-period');
        this.renderExamSuites();
      });
    });

    // Exam Province filter select dropdown (34 provinces)
    const provinceSelect = document.getElementById('province-select');
    if (provinceSelect) {
      provinceSelect.addEventListener('change', (e) => {
        this.state.examProvinceFilter = e.target.value;
        this.renderExamSuites();
      });
    }

    // Modal click backdrop & ESC key to close
    const modal = document.getElementById('item-history-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeItemHistoryModal();
        }
      });
    }
    const activeModal = document.getElementById('active-session-modal');
    if (activeModal) {
      activeModal.addEventListener('click', (e) => {
        if (e.target === activeModal) {
          this.closeActiveSessionModal();
        }
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeItemHistoryModal();
        this.closeActiveSessionModal();
      }
    });
  }

  showView(viewName) {
    this.state.currentView = viewName;
    document.querySelectorAll('.app-view').forEach(view => {
      view.classList.remove('active');
    });

    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add('active');
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.getAttribute('data-view') === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (viewName === 'curriculum') {
      this.renderCurriculum();
    } else if (viewName === 'exams') {
      this.renderExamSuites();
    } else if (viewName === 'theory') {
      this.renderTheory(this.state.theoryVolume);
    } else if (viewName === 'handbook') {
      this.renderHandbook(this.state.handbookCategory);
    } else if (viewName === 'history') {
      this.renderHistory();
    }

    this.refreshIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // ==========================================
  // TAB 1: LÝ THUYẾT (THEORY) - TỔNG HỢP THEO TỪNG CHƯƠNG LIỀN MẠCH, TAB CHƯƠNG & CHẾ ĐỘ CUỘN / SLIDE
  // ==========================================
  setTheoryMode(mode) {
    this.state.theoryMode = mode;
    this.state.theorySlideIndex = 0;
    document.querySelectorAll('#theory-mode-switch .mode-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-mode') === mode);
    });
    this.renderTheory(this.state.theoryVolume, this.state.activeTheoryChapter);
  }

  nextTheorySlide() {
    const chaptersInVol = THEORY_DATA.filter(t => t.volume === this.state.theoryVolume);
    const activeChap = chaptersInVol.find(c => c.chapterId === this.state.activeTheoryChapter) || chaptersInVol[0];
    const max = (activeChap && activeChap.sections) ? activeChap.sections.length - 1 : 0;
    if (this.state.theorySlideIndex < max) {
      this.state.theorySlideIndex++;
      this.renderTheory(this.state.theoryVolume, this.state.activeTheoryChapter);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  }

  prevTheorySlide() {
    if (this.state.theorySlideIndex > 0) {
      this.state.theorySlideIndex--;
      this.renderTheory(this.state.theoryVolume, this.state.activeTheoryChapter);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  }

  goToTheorySlide(idx) {
    this.state.theorySlideIndex = idx;
    this.renderTheory(this.state.theoryVolume, this.state.activeTheoryChapter);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  }

  switchTheoryChapter(chapterId) {
    this.state.activeTheoryChapter = chapterId;
    this.state.theorySlideIndex = 0;
    this.renderTheory(this.state.theoryVolume, chapterId);
  }

  renderTheory(volume = 1, selectedChapterId = null) {
    const tabsContainer = document.getElementById('theory-chapter-tabs');
    const contentContainer = document.getElementById('theory-content-container');
    if (!contentContainer) return;

    const chaptersInVol = THEORY_DATA.filter(t => t.volume === volume);

    if (chaptersInVol.length === 0) {
      if (tabsContainer) tabsContainer.innerHTML = '';
      contentContainer.innerHTML = `<div class="history-empty"><p>Nội dung lý thuyết đang được cập nhật...</p></div>`;
      return;
    }

    const currentActiveChapId = selectedChapterId || this.state.activeTheoryChapter || chaptersInVol[0].chapterId;
    this.state.activeTheoryChapter = currentActiveChapId;

    // Render Chapter Tabs (Pills)
    if (tabsContainer) {
      tabsContainer.innerHTML = chaptersInVol.map(chap => {
        const isActive = chap.chapterId === currentActiveChapId;
        return `
          <button class="theory-ch-tab ${isActive ? 'active' : ''}" onclick="window.math6App.switchTheoryChapter('${chap.chapterId}')">
            <i data-lucide="book-open"></i> ${chap.chapterNumber}: ${chap.chapterTitle}
          </button>
        `;
      }).join('');
    }

    // Active Chapter Content
    const activeChap = chaptersInVol.find(c => c.chapterId === currentActiveChapId) || chaptersInVol[0];
    const sections = activeChap.sections || [];

    if (this.state.theoryMode === 'slide') {
      // SLIDE MODE: Hiển thị từng section với bộ chuyển slide trước/sau
      const curIndex = Math.min(Math.max(0, this.state.theorySlideIndex || 0), Math.max(0, sections.length - 1));
      this.state.theorySlideIndex = curIndex;
      const curSec = sections[curIndex] || { title: '', boxedRule: '', notes: [] };

      const notesHtml = (curSec.notes || []).map(n => `<li>${sanitizeMathText(n)}</li>`).join('');

      // Stepper dots or pills
      const steppersHtml = sections.map((s, idx) => `
        <button class="slide-nav-btn ${idx === curIndex ? 'primary' : ''}" style="padding: 0.35rem 0.75rem; font-size: 0.82rem;" onclick="window.math6App.goToTheorySlide(${idx})">
          ${idx + 1}
        </button>
      `).join('');

      contentContainer.innerHTML = `
        <div class="theory-slide-card">
          <div>
            <div class="slide-header">
              <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                <span class="slide-chapter-badge"><i data-lucide="book-open" style="width: 14px; height: 14px; display: inline;"></i> ${activeChap.chapterNumber}: ${activeChap.chapterTitle}</span>
                <span class="slide-counter">Mục ${curIndex + 1} / ${sections.length}</span>
              </div>
              <div class="slide-steppers">
                <button class="slide-nav-btn" ${curIndex === 0 ? 'disabled' : ''} onclick="window.math6App.prevTheorySlide()">
                  <i data-lucide="arrow-left"></i> Mục trước
                </button>
                <button class="slide-nav-btn primary" ${curIndex === sections.length - 1 ? 'disabled' : ''} onclick="window.math6App.nextTheorySlide()">
                  Mục tiếp <i data-lucide="arrow-right"></i>
                </button>
              </div>
            </div>

            <div class="slide-body">
              <h3 class="slide-title">${curSec.title}</h3>

              <div class="theory-boxed-rule">
                ${formatMarkdown(sanitizeMathText(curSec.boxedRule))}
              </div>

              ${notesHtml ? `<ul class="theory-notes">${notesHtml}</ul>` : ''}

              ${curSec.example ? `
                <div class="theory-example">
                  <div class="theory-example-title"><i data-lucide="help-circle" style="width: 14px; height: 14px; display: inline;"></i> Ví dụ minh họa:</div>
                  <div style="font-weight: 600; margin-bottom: 0.35rem;">${sanitizeMathText(curSec.example.problem)}</div>
                  <div style="color: var(--text-secondary); font-size: 0.9rem;"><strong>Lời giải:</strong> ${formatMarkdown(sanitizeMathText(curSec.example.solution))}</div>
                </div>
              ` : ''}
            </div>
          </div>

          <div class="slide-footer-nav">
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">Chuyển nhanh mục:</span>
              ${steppersHtml}
            </div>
            <button class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1.15rem;" onclick="window.math6App.startPracticeChapter('${activeChap.chapterId}', 'Luyện tập tổng hợp ${activeChap.chapterNumber}: ${activeChap.chapterTitle}')">
              <i data-lucide="play-circle"></i> Ôn tập cuối chương
            </button>
          </div>
        </div>
      `;
    } else {
      // SCROLL MODE: Cuộn đọc tất cả các mục của chương
      let sectionsHtml = '';
      sections.forEach(sec => {
        const notesHtml = (sec.notes || []).map(n => `<li>${sanitizeMathText(n)}</li>`).join('');

        sectionsHtml += `
          <div class="theory-lesson-card">
            <h4 class="theory-lesson-title">${sec.title}</h4>
            
            <div class="theory-boxed-rule">
              ${formatMarkdown(sanitizeMathText(sec.boxedRule))}
            </div>

            ${notesHtml ? `<ul class="theory-notes">${notesHtml}</ul>` : ''}

            ${sec.example ? `
              <div class="theory-example">
                <div class="theory-example-title"><i data-lucide="help-circle" style="width: 14px; height: 14px; display: inline;"></i> Ví dụ minh họa:</div>
                <div style="font-weight: 600; margin-bottom: 0.35rem;">${sanitizeMathText(sec.example.problem)}</div>
                <div style="color: var(--text-secondary); font-size: 0.9rem;"><strong>Lời giải:</strong> ${formatMarkdown(sanitizeMathText(sec.example.solution))}</div>
              </div>
            ` : ''}
          </div>
        `;
      });

      contentContainer.innerHTML = `
        <div class="theory-chapter-block">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem;">
            <h3 class="theory-chapter-title" style="margin-bottom: 0;">
              <i data-lucide="book-open"></i> Tổng hợp lý thuyết ${activeChap.chapterNumber}: ${activeChap.chapterTitle}
            </h3>
            <button class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1.15rem;" onclick="window.math6App.startPracticeChapter('${activeChap.chapterId}', 'Luyện tập tổng hợp ${activeChap.chapterNumber}: ${activeChap.chapterTitle}')">
              <i data-lucide="play-circle"></i> Ôn tập cuối chương
            </button>
          </div>
          ${sectionsHtml}
        </div>
      `;
    }

    renderKatexInContainer(contentContainer);
    this.refreshIcons();
  }

  // ==========================================
  // TAB 2: BÀI HỌC & LUYỆN TẬP (CURRICULUM)
  // ==========================================
  renderCurriculum() {
    const container = document.getElementById('chapters-grid-container');
    if (!container) return;

    const volumeData = CURRICULUM.find(v => v.volume === this.state.activeVolume);
    if (!volumeData) return;

    // Resume active practice session banner if present
    let resumeBannerHtml = '';
    if (this.state.session && !this.state.session.isSubmitted && this.state.session.mode === 'practice' && (this.state.session.questions || []).length > 0) {
      const answeredCount = Object.keys(this.state.session.userAnswers || {}).length;
      const totalCount = (this.state.session.questions || []).length;
      resumeBannerHtml = `
        <div class="resume-session-banner" style="grid-column: 1 / -1;">
          <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
            <span class="in-progress-badge"><i data-lucide="play-circle"></i> Đang tiến hành</span>
            <span style="font-weight: 700; color: var(--text-primary);">${this.state.session.title}</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">(Đã làm ${answeredCount}/${totalCount} câu)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn-primary" style="padding: 0.45rem 1.15rem; font-size: 0.85rem;" onclick="window.math6App.showView('session')">
              <i data-lucide="play"></i> Tiếp tục làm bài ngay
            </button>
            <button class="btn-secondary" style="padding: 0.45rem 0.85rem; font-size: 0.85rem; color: var(--danger); border-color: rgba(239, 68, 68, 0.4);" onclick="window.math6App.cancelActiveSession()" title="Hủy bỏ phiên làm bài này">
              <i data-lucide="x"></i> Hủy phiên
            </button>
          </div>
        </div>
      `;
    }

    let html = resumeBannerHtml;
    volumeData.chapters.forEach(ch => {
      const lessonsHtml = ch.lessons.map(l => {
        const isReview = !!l.isReview;
        const isChapterActive = this.state.session && !this.state.session.isSubmitted && this.state.session.chapterId === ch.id && !this.state.session.topicId;
        const isLessonActive = this.state.session && !this.state.session.isSubmitted && this.state.session.topicId === l.id;
        const isActive = isReview ? isChapterActive : isLessonActive;

        const best = isReview
          ? getTargetBestScore({ chapterId: ch.id, isChapter: true })
          : getTargetBestScore({ topicId: l.id });
        const bestBadgeHtml = best ? `<span class="best-score-badge">🏆 ${best.bestScore}/10</span>` : '';
        const inProgressHtml = isActive ? `<span class="in-progress-badge"><i data-lucide="play-circle"></i> Đang tiến hành</span>` : '';

        const historyBtnHtml = isReview
          ? `<button class="history-trigger-btn" onclick="event.stopPropagation(); window.math6App.openItemHistoryModal('chapter', '${ch.id}', 'Lịch sử ôn tập - ${l.title.replace(/'/g, "\\'")}')" title="Xem lịch sử làm bài ôn tập chương này"><i data-lucide="history"></i> Lịch sử</button>`
          : `<button class="history-trigger-btn" onclick="event.stopPropagation(); window.math6App.openItemHistoryModal('lesson', '${l.id}', '${l.title.replace(/'/g, "\\'")}')" title="Xem lịch sử làm bài này"><i data-lucide="history"></i> Lịch sử</button>`;

        const clickAction = isReview
          ? (isChapterActive ? `window.math6App.showView('session')` : `window.math6App.startPracticeChapter('${ch.id}', 'Luyện tập tổng hợp ${ch.number}: ${ch.title.replace(/'/g, "\\'")}')`)
          : (isLessonActive ? `window.math6App.showView('session')` : `window.math6App.startPracticeLesson('${l.id}', '${ch.id}', '${l.title.replace(/'/g, "\\'")}')`);

        const reviewTagHtml = isReview
          ? `<span class="review-tag"><i data-lucide="sparkles"></i> 20 câu tổng hợp</span>`
          : (l.tag ? `<span style="font-size: 0.72rem; color: var(--text-muted);">${l.tag}</span>` : '');

        return `
          <div class="lesson-chip ${isReview ? 'review-lesson-chip' : ''} ${isActive ? 'active-lesson' : ''}" onclick="${clickAction}" title="${isReview ? 'Bấm để bắt đầu bài luyện tập tổng hợp 20 câu toàn bộ ' + ch.number : 'Luyện tập chủ đề ' + l.title}">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 0.25rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <span style="font-weight: 600; ${isReview ? 'color: #38bdf8;' : ''}">${l.title}</span>
                ${reviewTagHtml}
              </div>
              ${bestBadgeHtml ? `<div>${bestBadgeHtml}</div>` : ''}
            </div>
            <div class="lesson-chip-actions">
              ${inProgressHtml}
              ${historyBtnHtml}
            </div>
          </div>
        `;
      }).join('');

      const chapBest = getTargetBestScore({ chapterId: ch.id, isChapter: true });
      const chapBestHtml = chapBest ? `
        <div style="margin: 0.6rem 0 0.9rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span class="best-score-badge">🏆 Điểm cao nhất: ${chapBest.bestScore}/10</span>
          ${chapBest.gradeStatus ? `<span class="grade-badge ${chapBest.gradeClass}">${chapBest.gradeStatus}</span>` : ''}
        </div>
      ` : '';

      const isChapterActive = this.state.session && !this.state.session.isSubmitted && this.state.session.chapterId === ch.id && !this.state.session.topicId;
      const chapterActionBtn = isChapterActive ? `
        <button class="btn-primary" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);" onclick="window.math6App.showView('session')">
          <i data-lucide="play"></i> Tiếp tục làm bài
        </button>
      ` : `
        <button class="btn-primary" onclick="window.math6App.startPracticeChapter('${ch.id}', 'Luyện tập tổng hợp ${ch.number}: ${ch.title.replace(/'/g, "\\'")}')" title="Luyện tập trắc nghiệm tổng hợp nội bộ chương (20 câu)">
          <i data-lucide="play-circle"></i> Ôn tập cuối chương
        </button>
      `;

      html += `
        <div class="chapter-card">
          <div>
            <div class="chapter-card-top">
              <div class="chapter-icon-badge" style="background: ${ch.badgeColor};">
                <i data-lucide="${ch.icon}"></i>
              </div>
              <div class="chapter-header-info">
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
                  <span class="chapter-number" style="color: ${ch.badgeColor};">${ch.number}</span>
                  ${isChapterActive ? `<span class="in-progress-badge"><i data-lucide="play-circle"></i> Đang tiến hành</span>` : ''}
                </div>
                <h3 class="chapter-title">${ch.title}</h3>
              </div>
            </div>
            <p class="chapter-desc">${ch.description}</p>
            ${chapBestHtml}
            <div class="chapter-lessons-list">
              ${lessonsHtml}
            </div>
          </div>
          <div class="chapter-actions">
            ${chapterActionBtn}
            <button class="btn-secondary" onclick="window.math6App.openItemHistoryModal('chapter', '${ch.id}', 'Lịch sử học tập & làm bài - ${ch.number}: ${ch.title.replace(/'/g, "\\'")}')" title="Xem toàn bộ kết quả các bài tập đã làm trong ${ch.number}">
              <i data-lucide="history"></i> Lịch sử chương
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    this.refreshIcons();
  }

  // ==========================================
  // TAB 3: BỘ ĐỀ THI CHUẨN (EXAM SUITES - 34 TỈNH THÀNH & TOÀN QUỐC)
  // ==========================================
  populateProvinceSelect() {
    const select = document.getElementById('province-select');
    if (!select || select.options.length > 2) return;

    const provinces = new Set();
    EXAM_SUITES.forEach(s => {
      if (s.province && s.province !== 'Toàn quốc') {
        provinces.add(s.province);
      }
    });

    const sortedProvinces = Array.from(provinces).sort((a, b) => a.localeCompare(b, 'vi'));

    select.innerHTML = `
      <option value="all">Tất cả 34 tỉnh thành (${sortedProvinces.length} tỉnh)</option>
      <option value="Toàn quốc">Bộ đề Chuẩn Quốc Gia</option>
      ${sortedProvinces.map(p => `<option value="${p}">${p}</option>`).join('')}
    `;
  }

  renderExamSuites() {
    this.populateProvinceSelect();

    const container = document.getElementById('exam-suites-container');
    if (!container) return;

    const currentFormat = EXAM_FORMATS[this.state.selectedExamFormat] || EXAM_FORMATS.FORMAT_45MIN;
    const periodFilter = this.state.examPeriodFilter || 'all';
    const provinceFilter = this.state.examProvinceFilter || 'all';

    let filteredSuites = EXAM_SUITES.filter(suite => {
      if (periodFilter !== 'all' && suite.period !== periodFilter) {
        return false;
      }
      if (provinceFilter !== 'all' && suite.province !== provinceFilter) {
        return false;
      }
      return true;
    });

    if (filteredSuites.length === 0) {
      container.innerHTML = `
        <div class="history-empty" style="grid-column: 1 / -1; padding: 3rem;">
          <i data-lucide="search-x"></i>
          <h3>Không tìm thấy đề thi phù hợp</h3>
          <p>Không có đề thi nào khớp với bộ lọc kì thi và tỉnh thành đã chọn.</p>
          <button class="btn-primary" style="margin-top: 1rem;" onclick="window.math6App.resetExamFilters()">
            <i data-lucide="rotate-ccw"></i> Đặt lại bộ lọc
          </button>
        </div>
      `;
      this.refreshIcons();
      return;
    }

    let resumeBannerHtml = '';
    if (this.state.session && !this.state.session.isSubmitted && this.state.session.mode === 'exam' && (this.state.session.questions || []).length > 0) {
      const remainingMins = Math.max(0, Math.floor(this.state.session.timeRemaining / 60));
      const answeredCount = Object.keys(this.state.session.userAnswers || {}).length;
      const totalCount = (this.state.session.questions || []).length;
      resumeBannerHtml = `
        <div class="resume-session-banner" style="grid-column: 1 / -1;">
          <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
            <span class="in-progress-badge"><i data-lucide="play-circle"></i> Đang tiến hành</span>
            <span style="font-weight: 700; color: var(--text-primary);">${this.state.session.title} (Đã làm ${answeredCount}/${totalCount} câu • Còn ${remainingMins} phút)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn-primary" style="padding: 0.45rem 1.15rem; font-size: 0.85rem;" onclick="window.math6App.showView('session')">
              <i data-lucide="play"></i> Tiếp tục thi ngay
            </button>
            <button class="btn-secondary" style="padding: 0.45rem 0.85rem; font-size: 0.85rem; color: var(--danger); border-color: rgba(239, 68, 68, 0.4);" onclick="window.math6App.cancelActiveSession()" title="Hủy bỏ bài thi đang tiến hành">
              <i data-lucide="x"></i> Hủy bài thi
            </button>
          </div>
        </div>
      `;
    }

    let html = resumeBannerHtml;
    filteredSuites.forEach(suite => {
      const isMidterm = suite.period === 'GK1' || suite.period === 'GK2';
      const suiteDuration = isMidterm ? 45 : 60;
      const suiteQuestionCount = isMidterm ? 30 : 40;

      const isThisSuiteActive = this.state.session && !this.state.session.isSubmitted && this.state.session.mode === 'exam' && this.state.session.suiteId === suite.id;

      const suiteBest = getTargetBestScore({ suiteId: suite.id });
      const suiteBestHtml = suiteBest ? `
        <div class="suite-best-score-row">
          <span class="best-score-badge"><i data-lucide="trophy"></i> Điểm cao nhất: ${suiteBest.bestScore} / 10</span>
          ${suiteBest.gradeStatus ? `<span class="grade-badge ${suiteBest.gradeClass}">${suiteBest.gradeStatus}</span>` : ''}
        </div>
      ` : '';

      html += `
        <div class="exam-suite-card ${isThisSuiteActive ? 'active-suite-card' : ''}">
          <div class="suite-card-body">
            <div class="suite-top-bar">
              <div class="suite-tag-group">
                <span class="exam-tag tag-book"><i data-lucide="book-open"></i> KNTT</span>
                <span class="exam-tag tag-standard"><i data-lucide="shield-check"></i> Chuẩn BGD</span>
                ${isThisSuiteActive ? `<span class="in-progress-badge"><i data-lucide="play-circle"></i> Đang tiến hành</span>` : ''}
              </div>
              <span class="suite-period-badge">${suite.period}</span>
            </div>

            <h3 class="suite-title" title="${suite.title}">${suite.title}</h3>

            <div class="suite-metadata-row">
              <span class="meta-item"><i data-lucide="clock"></i> ${suiteDuration} phút</span>
              <span class="meta-dot">•</span>
              <span class="meta-item"><i data-lucide="help-circle"></i> ${suiteQuestionCount} câu</span>
              <span class="meta-dot">•</span>
              <span class="meta-item"><i data-lucide="shuffle"></i> Đảo đề tự động</span>
            </div>

            <div class="suite-scope-row">
              <i data-lucide="compass"></i>
              <span>${suite.subtitle}</span>
            </div>

            ${suiteBestHtml}
          </div>

          <div class="suite-actions-row">
            ${isThisSuiteActive ? `
              <button class="btn-primary exam-start-btn" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);" onclick="window.math6App.showView('session')">
                <i data-lucide="play"></i> Tiếp tục làm bài
              </button>
            ` : `
              <button class="btn-primary exam-start-btn" onclick="window.math6App.startExamSuite('${suite.id}')">
                <i data-lucide="sparkles"></i> Vào phòng thi ngay
              </button>
            `}
            <button class="exam-history-btn" onclick="window.math6App.openItemHistoryModal('exam', '${suite.id}', '${suite.title.replace(/'/g, "\\'")}')" title="Xem lịch sử làm bài riêng của đề thi này">
              <i data-lucide="history"></i> Lịch sử
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    this.refreshIcons();
  }

  resetExamFilters() {
    this.state.examPeriodFilter = 'all';
    this.state.examProvinceFilter = 'all';
    document.querySelectorAll('#exam-period-tabs .period-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-period') === 'all');
    });
    const select = document.getElementById('province-select');
    if (select) select.value = 'all';
    this.renderExamSuites();
  }

  // ==========================================
  // TAB 4: SỔ TAY CÔNG THỨC (HANDBOOK)
  // ==========================================
  renderHandbook(category = 'all') {
    const container = document.getElementById('handbook-grid-container');
    if (!container) return;

    let filteredCategories = FORMULA_HANDBOOK;
    if (category !== 'all') {
      filteredCategories = FORMULA_HANDBOOK.filter(c => c.category === category);
    }

    let html = '';
    filteredCategories.forEach(catGroup => {
      catGroup.items.forEach(item => {
        html += `
          <div class="handbook-card">
            <div>
              <div class="handbook-title">${item.title}</div>
              ${item.svg ? `<div class="handbook-svg-container">${item.svg}</div>` : ''}
              <div class="handbook-formula-box ${item.alignLeft ? 'handbook-formula-left' : ''}">${item.formula_latex}</div>
              <p class="handbook-desc">${sanitizeMathText(item.description)}</p>
            </div>
          </div>
        `;
      });
    });

    container.innerHTML = html;
    renderKatexInContainer(container);
    this.refreshIcons();
  }

  // ==========================================
  // TAB 5: LỊCH SỬ HỌC TẬP (HISTORY)
  // ==========================================
  renderHistory() {
    const listContainer = document.getElementById('history-list-container');
    const statsTotal = document.getElementById('stat-total-tests');
    const statsAvg = document.getElementById('stat-avg-score');
    const statsCorrect = document.getElementById('stat-total-correct');

    const history = getLearningHistory();
    const hasOngoing = this.state.session && !this.state.session.isSubmitted && (this.state.session.questions || []).length > 0;

    let activeSessionBannerHtml = '';
    if (this.state.session && this.state.session.isSubmitted) {
      activeSessionBannerHtml = `
        <div class="active-session-banner" style="background: rgba(99, 102, 241, 0.12); border: 1px solid var(--accent-primary); border-radius: var(--radius-lg); padding: 1rem 1.25rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="font-weight: 700; color: var(--accent-primary); font-size: 0.95rem;">
              <i data-lucide="award" style="width: 16px; height: 16px; display: inline;"></i> Bạn đang có phiên bài làm vừa hoàn thành: <strong>${this.state.session.title}</strong>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
              Điểm số: <strong style="color: var(--success); font-weight: 800;">${this.state.session.score} / 10</strong>
            </div>
          </div>
          <button class="btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.88rem;" onclick="window.math6App.showView('result')">
            <i data-lucide="arrow-left"></i> Quay lại màn hình Kết quả bài vừa nộp
          </button>
        </div>
      `;
    }

    if (history.length === 0 && !hasOngoing) {
      if (statsTotal) statsTotal.textContent = '0';
      if (statsAvg) statsAvg.textContent = '0.0';
      if (statsCorrect) statsCorrect.textContent = '0';

      if (listContainer) {
        listContainer.innerHTML = `
          ${activeSessionBannerHtml}
          <div class="history-empty">
            <i data-lucide="history"></i>
            <h3>Chưa có dữ liệu bài làm nào</h3>
            <p>Hãy bắt đầu làm các bài luyện tập hoặc đề thi để lưu lại tiến trình học tập tại đây!</p>
          </div>
        `;
      }
      this.refreshIcons();
      return;
    }

    // Thống kê tổng hợp
    const totalCompleted = history.length;
    let sumScore = 0;
    let sumCorrect = 0;

    history.forEach(item => {
      sumScore += parseFloat(item.score) || 0;
      sumCorrect += parseInt(item.correctCount, 10) || 0;
    });

    const avgScore = totalCompleted > 0 ? (sumScore / totalCompleted).toFixed(1) : '0.0';

    if (statsTotal) {
      statsTotal.innerHTML = hasOngoing ? `${totalCompleted} <span style="font-size: 0.75rem; color: #f59e0b; font-weight: 600;">(+1 đang tiến hành)</span>` : `${totalCompleted}`;
    }
    if (statsAvg) statsAvg.textContent = avgScore;
    if (statsCorrect) statsCorrect.textContent = sumCorrect;

    // Ongoing session row (bài tập đang tiến hành)
    let ongoingRowHtml = '';
    if (hasOngoing) {
      const s = this.state.session;
      const answeredCount = Object.keys(s.userAnswers || {}).length;
      const totalQuestions = (s.questions || []).length;
      const modeLabel = s.mode === 'exam' ? 'Thi trắc nghiệm chuẩn' : 'Luyện tập bài học';
      const remainingStr = s.mode === 'exam' ? `Còn ${Math.max(0, Math.floor(s.timeRemaining / 60))}p` : 'Không giới hạn';

      ongoingRowHtml = `
        <tr style="background: rgba(245, 158, 11, 0.08); border-left: 3.5px solid #f59e0b;">
          <td><span style="font-size: 0.85rem; color: #f59e0b; font-weight: 700;">Hôm nay (Đang tiến hành)</span></td>
          <td>
            <strong style="color: var(--text-primary);">${s.title}</strong>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${modeLabel}</div>
          </td>
          <td>
            <span class="in-progress-badge"><i data-lucide="play-circle"></i> Đang tiến hành</span>
          </td>
          <td>
            <span style="color: #f59e0b; font-size: 0.85rem; font-weight: 600;">Chưa hoàn thành</span>
          </td>
          <td>
            <strong>${answeredCount} / ${totalQuestions} câu đã làm</strong>
          </td>
          <td>
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${remainingStr}</span>
          </td>
          <td>
            <div style="display: flex; gap: 0.35rem;">
              <button class="btn-primary" style="font-size: 0.75rem; padding: 0.32rem 0.65rem;" onclick="window.math6App.showView('session')">
                <i data-lucide="play"></i> Tiếp tục
              </button>
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 0.32rem 0.55rem; color: var(--danger); border-color: rgba(239, 68, 68, 0.4);" onclick="window.math6App.cancelActiveSession()" title="Hủy bỏ phiên đang tiến hành này">
                <i data-lucide="x"></i> Hủy
              </button>
            </div>
          </td>
        </tr>
      `;
    }

    // Render bảng lịch sử
    let rowsHtml = ongoingRowHtml;
    history.forEach(item => {
      const scoreNum = parseFloat(item.score);
      let badgeClass = 'score-mid';
      if (scoreNum >= 8.0) badgeClass = 'score-high';
      else if (scoreNum < 5.0) badgeClass = 'score-low';

      const mins = Math.floor((item.durationSeconds || 0) / 60);
      const secs = (item.durationSeconds || 0) % 60;
      const durationStr = `${mins}p ${secs}s`;

      const gradeHtml = (item.totalQuestions >= 20 && item.gradeStatus)
        ? `<td><span class="grade-badge ${item.gradeClass}">${item.gradeStatus}</span></td>`
        : `<td><span style="color: var(--text-muted); font-size: 0.85rem;">—</span></td>`;

      rowsHtml += `
        <tr>
          <td><span style="font-size: 0.85rem; color: var(--text-secondary);">${item.formattedDate}</span></td>
          <td>
            <strong>${item.title}</strong>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${item.mode === 'exam' ? 'Thi trắc nghiệm' : 'Luyện tập'}</div>
          </td>
          <td>
            <span class="score-badge ${badgeClass}">${item.score} / 10</span>
          </td>
          ${gradeHtml}
          <td>
            <strong>${item.correctCount} / ${item.totalQuestions} câu</strong>
          </td>
          <td>
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${durationStr}</span>
          </td>
          <td>
            <button class="btn-secondary" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;" onclick="window.math6App.retryFromHistory('${item.topicId}', '${item.chapterId}', '${item.title}', '${item.mode}')">
              <i data-lucide="rotate-ccw"></i> Làm lại
            </button>
          </td>
        </tr>
      `;
    });

    if (listContainer) {
      listContainer.innerHTML = `
        ${activeSessionBannerHtml}
        <table class="history-table">
          <thead>
            <tr>
              <th>Thời gian</th>
              <th>Nội dung bài làm</th>
              <th>Điểm số</th>
              <th>Xếp loại</th>
              <th>Kết quả</th>
              <th>Thời gian làm</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      `;
    }

    this.refreshIcons();
  }

  resetSessionToIdle() {
    if (this.state.session && this.state.session.timerTimerId) {
      clearInterval(this.state.session.timerTimerId);
    }
    this.state.session = {
      mode: 'practice',
      title: '',
      topicId: null,
      chapterId: null,
      suiteId: null,
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      flagged: new Set(),
      hintsRevealed: {},
      timeRemaining: 0,
      initialDurationSeconds: 0,
      timerTimerId: null,
      isSubmitted: false,
      score: 0,
      bloomStats: null
    };
  }

  cancelActiveSession() {
    if (confirm('Bạn có chắc chắn muốn hủy bài làm đang tiến hành không? Dữ liệu của bài này sẽ không được lưu.')) {
      this.resetSessionToIdle();
      if (this.state.currentView === 'curriculum') {
        this.renderCurriculum();
      } else if (this.state.currentView === 'exams') {
        this.renderExamSuites();
      } else if (this.state.currentView === 'history') {
        this.renderHistory();
      } else {
        this.showView('curriculum');
      }
    }
  }

  clearExamHistory() {
    if (confirm('Bạn có chắc chắn muốn xóa lịch sử các bài thi thử (GK1, CK1, GK2, CK2)? Lịch sử luyện tập bài học và ôn tập chương vẫn được giữ nguyên.')) {
      clearExamHistoryOnly();
      if (this.state.session && this.state.session.mode === 'exam') {
        this.resetSessionToIdle();
      }
      this.renderHistory();
      this.renderExamSuites();
    }
  }

  clearAllHistory() {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử thi và bài làm? Bài tập và đề thi sẽ được làm mới sạch sẽ để bạn bắt đầu lại bình thường.')) {
      clearLearningHistory();
      this.resetSessionToIdle();
      this.renderHistory();
      this.renderCurriculum();
      this.renderExamSuites();
    }
  }

  retryFromHistory(topicId, chapterId, title, mode) {
    if (topicId && topicId !== 'null') {
      this.startPracticeLesson(topicId, chapterId, title);
    } else if (chapterId && chapterId !== 'null') {
      this.startPracticeChapter(chapterId, title);
    } else {
      this.startExamSuite('exam-gk1');
    }
  }

  // ==========================================
  // SESSION CONTROLLER (PRACTICE / EXAM)
  // STRICT CONSTRAINTS ENFORCEMENT & SESSION LOCKING
  // ==========================================

  hasActiveSession() {
    return this.state.session && 
           !this.state.session.isSubmitted && 
           this.state.session.questions && 
           this.state.session.questions.length > 0;
  }

  openActiveSessionModal(title) {
    const modal = document.getElementById('active-session-modal');
    const targetTitleEl = document.getElementById('active-session-target-title');
    if (targetTitleEl) targetTitleEl.textContent = title;
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
      this.refreshIcons();
    }
  }

  closeActiveSessionModal() {
    const modal = document.getElementById('active-session-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
    }
  }

  resumeFromActiveSessionModal() {
    this.closeActiveSessionModal();
    this.showView('session');
  }

  confirmActiveSession(targetType, targetId) {
    if (!this.hasActiveSession()) return true;

    const s = this.state.session;
    const isSameLesson = targetType === 'lesson' && s.topicId === targetId;
    const isSameChapter = targetType === 'chapter' && s.chapterId === targetId && !s.topicId;
    const isSameExam = targetType === 'exam' && s.suiteId === targetId;

    if (isSameLesson || isSameChapter || isSameExam) {
      this.showView('session');
      return false;
    }

    this.openActiveSessionModal(s.title);
    return false;
  }

  /**
   * Constraint 1: Luyện tập từng bài (Lesson Practice)
   * Đúng CHÍNH XÁC 5 câu trắc nghiệm.
   * Cách ly kiến thức: chỉ chứa câu hỏi đúng chủ đề bài học đó.
   */
  startPracticeLesson(lessonId, chapterId, lessonTitle) {
    if (!this.confirmActiveSession('lesson', lessonId)) return;
    let matched = QUESTION_BANK.filter(q => q.topic_id === lessonId);

    // Nếu chưa đủ 5 câu trong bank tĩnh, chỉ sinh biến thể nếu đúng topic_id
    let count = 0;
    while (matched.length < 5 && count < 20) {
      count++;
      const newVar = generateRandomQuestion(lessonId, chapterId);
      if (newVar && newVar.topic_id === lessonId) {
        matched.push(newVar);
      }
    }

    // Bảo đảm tuyệt đối cách ly bài học: CHỈ lấy câu hỏi đúng topic_id
    const strictlyLessonQuestions = matched.filter(q => q.topic_id === lessonId);

    // Cắt tối đa 5 câu chuẩn chủ đề bài học
    const finalFive = strictlyLessonQuestions.slice(0, 5);

    // Shuffle options và shuffle câu hỏi
    const sessionQs = prepareSessionQuestions(finalFive, { shuffleQuestions: true, shuffleOptions: true });

    this.initSession({
      mode: 'practice',
      title: lessonTitle,
      topicId: lessonId,
      chapterId: chapterId,
      questions: sessionQs,
      durationMinutes: 0
    });
  }

  /**
   * Constraint 2: Luyện tập cuối chương (Chapter Practice)
   * Đúng CHÍNH XÁC 20 câu trắc nghiệm.
   * Phân bổ cân đối theo 4 mức độ tư duy Bloom:
   *   - 6 câu Nhận biết (EASY)
   *   - 7 câu Thông hiểu (MEDIUM)
   *   - 5 câu Vận dụng (HARD)
   *   - 2 câu Vận dụng cao (ADVANCED)
   * Cách ly tuyệt đối: CHỈ lấy bài tập trong nội bộ chương đang xét.
   */
  startPracticeChapter(chapterId, chapterTitle) {
    if (!this.confirmActiveSession('chapter', chapterId)) return;
    const quota = {
      EASY: 6,
      MEDIUM: 7,
      HARD: 5,
      ADVANCED: 2
    };

    let selected = [];

    for (const [diff, countNeeded] of Object.entries(quota)) {
      let pool = QUESTION_BANK.filter(q => q.chapter_id === chapterId && q.difficulty === diff);
      // Xáo trộn ngẫu nhiên để lấy đều các bài trong chương
      let diffQuestions = [...pool].sort(() => 0.5 - Math.random());

      // Nếu chưa đủ số lượng cho mức độ này, sinh biến thể số với đúng diff
      let safetyCount = 0;
      while (diffQuestions.length < countNeeded && safetyCount < 30) {
        safetyCount++;
        const newVar = generateRandomQuestion(null, chapterId, diff);
        if (newVar) {
          newVar.chapter_id = chapterId;
          newVar.difficulty = diff;
          diffQuestions.push(newVar);
        }
      }

      selected.push(...diffQuestions.slice(0, countNeeded));
    }

    // Nếu vì lý do hiếm hoi chưa đủ 20 câu, bổ sung cho đủ 20
    let totalCount = 0;
    while (selected.length < 20 && totalCount < 30) {
      totalCount++;
      const newVar = generateRandomQuestion(null, chapterId, 'MEDIUM');
      if (newVar) {
        newVar.chapter_id = chapterId;
        selected.push(newVar);
      }
    }

    const finalTwenty = selected.slice(0, 20);
    const sessionQs = prepareSessionQuestions(finalTwenty, { shuffleQuestions: true, shuffleOptions: true });

    this.initSession({
      mode: 'practice',
      title: chapterTitle || 'Luyện tập tổng hợp chương',
      topicId: null,
      chapterId: chapterId,
      questions: sessionQs,
      durationMinutes: 0
    });
  }

  /**
   * Tab 3: Bộ đề thi chuẩn
   * - GK1, GK2: 30 câu / 45 phút
   * - CK1, CK2: 40 câu / 60 phút
   */
  startExamSuite(suiteId) {
    if (!this.confirmActiveSession('exam', suiteId)) return;
    const suite = EXAM_SUITES.find(s => s.id === suiteId) || EXAM_SUITES[0];
    const isMidterm = suite.period === 'GK1' || suite.period === 'GK2';
    const currentFormat = isMidterm ? EXAM_FORMATS.FORMAT_45MIN : EXAM_FORMATS.FORMAT_60MIN;

    const targetCount = currentFormat.questionCount; // 30 (GK) hoặc 40 (CK)
    const durationMinutes = currentFormat.durationMinutes; // 45 (GK) hoặc 60 (CK)
    const matrix = currentFormat.matrix || (isMidterm 
      ? { EASY: 12, MEDIUM: 10, HARD: 6, ADVANCED: 2 }
      : { EASY: 16, MEDIUM: 14, HARD: 8, ADVANCED: 2 });

    let selectedQuestions = [];

    // Lựa chọn theo ma trận Bloom định chuẩn Bộ GD&ĐT
    for (const [diff, countNeeded] of Object.entries(matrix)) {
      // Lấy từ pool câu hỏi tĩnh thuộc các chương trong scope có đúng diff
      let pool = QUESTION_BANK.filter(q => suite.scope.includes(q.chapter_id) && q.difficulty === diff);
      
      // Xáo trộn pool tĩnh
      let diffList = [...pool].sort(() => 0.5 - Math.random());

      // Lấy tối đa một nửa số câu từ bank tĩnh
      let takeCount = Math.min(diffList.length, Math.ceil(countNeeded / 2));
      let taken = diffList.slice(0, takeCount);
      selectedQuestions.push(...taken);

      // Số câu còn lại sinh biến thể sáng tạo với đúng độ khó diff và chương trong scope
      let remaining = countNeeded - taken.length;
      let attempts = 0;
      while (remaining > 0 && attempts < 40) {
        attempts++;
        const randomChap = suite.scope[Math.floor(Math.random() * suite.scope.length)];
        const newVar = generateRandomQuestion(null, randomChap, diff);
        newVar.chapter_id = randomChap;
        newVar.difficulty = diff;
        selectedQuestions.push(newVar);
        remaining--;
      }
    }

    // Nếu vì lý do hiếm hoi chưa đủ targetCount, bổ sung thêm cho đủ
    while (selectedQuestions.length < targetCount) {
      const randomChap = suite.scope[Math.floor(Math.random() * suite.scope.length)];
      const newVar = generateRandomQuestion(null, randomChap, 'MEDIUM');
      newVar.chapter_id = randomChap;
      selectedQuestions.push(newVar);
    }

    const finalQuestions = selectedQuestions.slice(0, targetCount);
    const sessionQs = prepareSessionQuestions(finalQuestions, { shuffleQuestions: true, shuffleOptions: true });

    this.initSession({
      mode: 'exam',
      title: suite.title,
      topicId: null,
      chapterId: null,
      suiteId: suite.id,
      questions: sessionQs,
      durationMinutes: durationMinutes
    });
  }

  initSession({ mode, title, topicId, chapterId, suiteId, questions, durationMinutes }) {
    if (this.state.session && this.state.session.timerTimerId) {
      clearInterval(this.state.session.timerTimerId);
    }

    this.state.session = {
      mode,
      title,
      topicId: topicId || null,
      chapterId: chapterId || null,
      suiteId: suiteId || null,
      questions,
      currentIndex: 0,
      userAnswers: {},
      flagged: new Set(),
      hintsRevealed: {},
      timeRemaining: durationMinutes * 60,
      initialDurationSeconds: durationMinutes * 60,
      timerTimerId: null,
      isSubmitted: false,
      score: 0,
      bloomStats: null
    };

    const timerElement = document.getElementById('session-timer');
    if (mode === 'exam' && durationMinutes > 0) {
      this.startTimer();
    } else {
      if (timerElement) timerElement.style.display = 'none';
    }

    this.showView('session');
    this.renderCurrentQuestion();
    this.renderPalette();
  }

  exitSessionToPreviousView() {
    if (!this.state.session || !this.state.session.questions || this.state.session.questions.length === 0) {
      this.showView('curriculum');
      return;
    }
    if (this.state.session.isSubmitted) {
      this.showView('result');
      return;
    }
    if (this.state.session.mode === 'exam') {
      this.renderExamSuites();
      this.showView('exams');
    } else {
      this.renderCurriculum();
      this.showView('curriculum');
    }
  }

  startTimer() {
    const timerElement = document.getElementById('session-timer');
    if (!timerElement) return;

    timerElement.style.display = 'flex';

    this.state.session.timerTimerId = setInterval(() => {
      if (this.state.session.timeRemaining <= 0) {
        clearInterval(this.state.session.timerTimerId);
        alert('Đã hết thời gian làm bài! Hệ thống tự động thu bài của bạn.');
        this.submitExam();
        return;
      }

      this.state.session.timeRemaining--;
      this.updateTimerDisplay();
    }, 1000);

    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const timerElement = document.getElementById('session-timer');
    if (!timerElement) return;

    const seconds = this.state.session.timeRemaining;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    timerElement.innerHTML = `<i data-lucide="clock"></i> <span>${timeStr}</span>`;
    this.refreshIcons();

    if (seconds <= 300) {
      timerElement.classList.add('warning');
    } else {
      timerElement.classList.remove('warning');
    }
  }

  // ==========================================
  // RENDER QUESTION & WIDGETS
  // ==========================================
  renderCurrentQuestion() {
    const { questions, currentIndex, userAnswers, flagged, hintsRevealed, isSubmitted, mode } = this.state.session;
    const q = questions[currentIndex];
    if (!q) return;

    // Header info
    document.getElementById('session-title-text').textContent = this.state.session.title;
    document.getElementById('q-index-pill').textContent = `Câu ${currentIndex + 1} / ${questions.length}`;

    // Back button text
    const backBtnText = document.getElementById('session-back-btn-text');
    if (backBtnText) {
      if (isSubmitted) {
        backBtnText.textContent = 'Quay lại kết quả';
      } else if (mode === 'exam') {
        backBtnText.textContent = 'Quay lại Bộ đề thi';
      } else {
        backBtnText.textContent = 'Quay lại Bài học';
      }
    }

    // Mode badge
    const modeBadge = document.getElementById('session-mode-badge');
    if (modeBadge) {
      if (isSubmitted) {
        modeBadge.textContent = 'CHẾ ĐỘ XEM LẠI (REVIEW MODE)';
        modeBadge.style.background = 'rgba(16, 185, 129, 0.2)';
        modeBadge.style.color = 'var(--success)';
      } else {
        modeBadge.textContent = mode === 'exam' ? 'PHÒNG THI TRẮC NGHIỆM' : 'LUYỆN TẬP BÀI HỌC';
        modeBadge.style.background = 'rgba(99, 102, 241, 0.15)';
        modeBadge.style.color = 'var(--accent-primary)';
      }
    }

    // Anti-cram / review tools in toolbar
    const antiCramTools = document.querySelector('.anti-cram-tools');
    if (antiCramTools) {
      if (isSubmitted) {
        antiCramTools.innerHTML = `
          <button class="tool-badge-btn" style="color: var(--accent-primary); border-color: var(--accent-primary); font-weight: 700;" onclick="window.math6App.showView('result')">
            <i data-lucide="award"></i> Quay lại màn hình Kết quả
          </button>
        `;
      } else {
        antiCramTools.innerHTML = `
          <button class="tool-badge-btn" onclick="window.math6App.shuffleCurrentSession()" title="Đảo ngẫu nhiên câu hỏi và đảo thứ tự các phương án A/B/C/D">
            <i data-lucide="shuffle"></i> Đảo câu & Đảo đáp án
          </button>
          <button class="tool-badge-btn" onclick="window.math6App.generateNewVariantForCurrent()" title="Sinh bài toán tương tự với số liệu mới">
            <i data-lucide="sparkles"></i> Tạo biến thể số mới
          </button>
        `;
      }
    }
    
    // Difficulty badge
    const diffTag = document.getElementById('difficulty-tag');
    diffTag.className = `difficulty-tag difficulty-${q.difficulty}`;
    diffTag.textContent = q.difficulty_label || q.difficulty;

    // Flag button
    const flagBtn = document.getElementById('flag-btn');
    if (flagged.has(q.id)) {
      flagBtn.classList.add('flagged');
      flagBtn.innerHTML = `<i data-lucide="bookmark-check"></i> Đã đánh dấu`;
    } else {
      flagBtn.classList.remove('flagged');
      flagBtn.innerHTML = `<i data-lucide="bookmark"></i> Đánh dấu`;
    }

    // Content LaTeX
    const contentEl = document.getElementById('question-content-latex');
    contentEl.innerHTML = sanitizeMathText(q.content_latex);

    // Visual Widget
    const widgetContainer = document.getElementById('question-visual-widget');
    if (q.visual_widget && q.visual_widget.type) {
      widgetContainer.style.display = 'block';
      this.dispatchWidget(widgetContainer, q.visual_widget);
    } else {
      widgetContainer.style.display = 'none';
      widgetContainer.innerHTML = '';
    }

    // Answer options / Numeric input
    const answersContainer = document.getElementById('question-answers-container');
    answersContainer.innerHTML = '';

    const currentAnswer = userAnswers[q.id];

    if (q.type === 'numeric_input') {
      const isCorrect = isSubmitted && String(currentAnswer).trim() === String(q.correct_answer).trim();
      const isWrong = isSubmitted && currentAnswer !== undefined && !isCorrect;

      answersContainer.innerHTML = `
        <div class="numeric-input-wrapper">
          <input type="text" id="numeric-answer-input" class="numeric-field" 
                 placeholder="Nhập số đáp án của bạn..." 
                 value="${currentAnswer !== undefined ? currentAnswer : ''}"
                 ${isSubmitted ? 'disabled' : ''}>
          ${!isSubmitted ? `
            <button class="btn-primary" onclick="window.math6App.saveNumericAnswer('${q.id}')">
              <i data-lucide="check"></i> Lưu
            </button>
          ` : ''}
        </div>
        ${isSubmitted ? `
          <div style="font-size: 0.95rem; margin-bottom: 1rem; font-weight: 600; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
            ${isCorrect ? '✓ Bạn trả lời chính xác!' : `✗ Đáp án đúng là: ${q.correct_answer}`}
          </div>
        ` : ''}
      `;

      const input = document.getElementById('numeric-answer-input');
      if (input && !isSubmitted) {
        input.addEventListener('change', (e) => {
          this.recordAnswer(q.id, e.target.value);
        });
      }
    } else {
      const optionsHtml = (q.options || []).map((opt, idx) => {
        const key = String.fromCharCode(65 + idx);
        const isSelected = q.type === 'multiple_choice'
          ? (Array.isArray(currentAnswer) && currentAnswer.includes(opt))
          : currentAnswer === opt;

        let extraClass = isSelected ? 'selected' : '';

        if (isSubmitted) {
          const isThisCorrect = q.type === 'multiple_choice'
            ? (Array.isArray(q.correct_answer) && q.correct_answer.includes(opt))
            : q.correct_answer === opt;

          if (isThisCorrect) extraClass += ' correct-reveal';
          else if (isSelected && !isThisCorrect) extraClass += ' wrong-reveal';
        }

        return `
          <div class="option-item ${extraClass}" onclick="window.math6App.selectOption('${q.id}', '${encodeURIComponent(opt)}', '${q.type}')">
            <span class="option-key">${key}</span>
            <span class="option-text">${sanitizeMathText(opt)}</span>
          </div>
        `;
      }).join('');

      answersContainer.innerHTML = `<div class="options-list">${optionsHtml}</div>`;
    }

    // Gợi ý đã được loại bỏ theo yêu cầu để tránh học sinh gian lận
    const hintsContainer = document.getElementById('hints-container');
    if (hintsContainer) {
      hintsContainer.style.display = 'none';
      hintsContainer.innerHTML = '';
    }

    // Solution box
    const solutionContainer = document.getElementById('solution-container');
    if (isSubmitted && q.explanation_latex) {
      solutionContainer.innerHTML = `
        <div class="solution-box">
          <div class="solution-title">
            <i data-lucide="check-circle-2"></i> Lời giải chi tiết
          </div>
          <div class="solution-content">
            ${formatMarkdown(sanitizeMathText(q.explanation_latex))}
          </div>
        </div>
      `;
      solutionContainer.style.display = 'block';
    } else {
      solutionContainer.style.display = 'none';
      solutionContainer.innerHTML = '';
    }

    // Navigation buttons (Constraint 4.1: Câu 1 ẩn nút Trước, Câu cuối ẩn nút Tiếp, Nút Tiếp luôn ở bên phải)
    const prevBtn = document.getElementById('prev-q-btn');
    const nextBtn = document.getElementById('next-q-btn');
    const nextWrapper = document.getElementById('next-q-wrapper');

    if (prevBtn) {
      if (currentIndex === 0) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'inline-flex';
        prevBtn.disabled = false;
      }
    }

    if (nextBtn) {
      if (currentIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        if (nextWrapper) nextWrapper.style.display = 'none';
      } else {
        nextBtn.style.display = 'inline-flex';
        nextBtn.disabled = false;
        if (nextWrapper) {
          nextWrapper.style.display = 'flex';
          nextWrapper.style.marginLeft = 'auto';
        }
      }
    }

    // Render Math KaTeX
    renderKatexInContainer(document.getElementById('question-card-inner'));
    this.refreshIcons();
  }

  dispatchWidget(container, widgetConfig) {
    switch (widgetConfig.type) {
      case 'number_line':
        NumberLineWidget.render(container, widgetConfig.config);
        break;
      case 'fraction_bar':
        FractionBarWidget.render(container, widgetConfig.config);
        break;
      case 'pictogram':
        PictogramWidget.render(container, widgetConfig.config);
        break;
      case 'bar_chart':
        BarChartWidget.render(container, widgetConfig.config);
        break;
      case 'geometry_preview':
        GeometryWidget.render(container, widgetConfig.config);
        break;
      default:
        container.innerHTML = '';
    }
  }

  selectOption(questionId, encodedOption, type) {
    if (this.state.session.isSubmitted) return;

    const option = decodeURIComponent(encodedOption);
    if (type === 'multiple_choice') {
      const current = this.state.session.userAnswers[questionId] || [];
      let updated;
      if (current.includes(option)) {
        updated = current.filter(o => o !== option);
      } else {
        updated = [...current, option];
      }
      this.recordAnswer(questionId, updated);
    } else {
      this.recordAnswer(questionId, option);
    }

    this.renderCurrentQuestion();
    this.renderPalette();
  }

  saveNumericAnswer(questionId) {
    const input = document.getElementById('numeric-answer-input');
    if (input) {
      this.recordAnswer(questionId, input.value.trim());
      this.renderPalette();
    }
  }

  recordAnswer(questionId, answer) {
    this.state.session.userAnswers[questionId] = answer;
    this.renderPalette();
  }

  toggleFlag() {
    const q = this.state.session.questions[this.state.session.currentIndex];
    if (!q) return;

    if (this.state.session.flagged.has(q.id)) {
      this.state.session.flagged.delete(q.id);
    } else {
      this.state.session.flagged.add(q.id);
    }

    this.renderCurrentQuestion();
    this.renderPalette();
  }

  revealNextHint(questionId) {
    // Không còn sử dụng - gợi ý đã bị gỡ bỏ để chống gian lận
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.state.session.questions.length) {
      this.state.session.currentIndex = index;
      this.renderCurrentQuestion();
      this.renderPalette();
    }
  }

  nextQuestion() {
    if (this.state.session.currentIndex < this.state.session.questions.length - 1) {
      this.goToQuestion(this.state.session.currentIndex + 1);
    }
  }

  prevQuestion() {
    if (this.state.session.currentIndex > 0) {
      this.goToQuestion(this.state.session.currentIndex - 1);
    }
  }

  // ==========================================
  // ANTI-CRAMMING ENGINE
  // ==========================================
  shuffleCurrentSession() {
    if (this.state.session.isSubmitted) return;

    this.state.session.questions = prepareSessionQuestions(this.state.session.questions, {
      shuffleQuestions: true,
      shuffleOptions: true
    });
    this.state.session.currentIndex = 0;

    alert('Đã xáo trộn ngẫu nhiên thứ tự các câu hỏi và đảo các phương án A/B/C/D!');
    this.renderCurrentQuestion();
    this.renderPalette();
  }

  generateNewVariantForCurrent() {
    if (this.state.session.isSubmitted) return;

    const curQ = this.state.session.questions[this.state.session.currentIndex];
    let newVariant = generateRandomQuestion(curQ.topic_id, curQ.chapter_id);
    if (!newVariant || newVariant.topic_id !== curQ.topic_id) {
      const topicBank = QUESTION_BANK.filter(q => q.topic_id === curQ.topic_id && q.id !== curQ.id);
      if (topicBank.length > 0) {
        newVariant = JSON.parse(JSON.stringify(topicBank[Math.floor(Math.random() * topicBank.length)]));
        newVariant.id = `${newVariant.id}_v_${Date.now()}`;
      }
    }

    if (newVariant) {
      this.state.session.questions[this.state.session.currentIndex] = newVariant;
      delete this.state.session.userAnswers[newVariant.id];
      alert('Đã tạo một bài toán tương tự cùng chủ đề để bạn thử sức!');
      this.renderCurrentQuestion();
      this.renderPalette();
    }
  }

  // ==========================================
  // PALETTE RENDERER
  // ==========================================
  renderPalette() {
    const paletteGrid = document.getElementById('palette-grid');
    if (!paletteGrid) return;

    const { questions, currentIndex, userAnswers, flagged } = this.state.session;

    const answeredBadge = document.getElementById('answered-count-badge');
    if (answeredBadge) {
      const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k] !== undefined && userAnswers[k] !== '').length;
      answeredBadge.textContent = `${answeredCount}/${questions.length} đã chọn`;
    }

    let html = '';
    questions.forEach((q, idx) => {
      const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== '';
      const isFlagged = flagged.has(q.id);
      const isActive = idx === currentIndex;

      let cls = 'palette-btn';
      if (isActive) cls += ' active';
      if (isAnswered) cls += ' answered';
      if (isFlagged) cls += ' flagged';

      html += `
        <button class="${cls}" onclick="window.math6App.goToQuestion(${idx})">
          ${idx + 1}
        </button>
      `;
    });

    paletteGrid.innerHTML = html;

    // Palette action button (Constraint 4.2: Chế độ Xem lại bài làm thay thế nút Nộp bài bằng Quay lại màn hình Kết quả)
    const paletteAction = document.getElementById('palette-action-container');
    if (paletteAction) {
      if (this.state.session.isSubmitted) {
        paletteAction.innerHTML = `
          <button class="btn-primary" style="width: 100%; padding: 0.85rem;" onclick="window.math6App.showView('result')">
            <i data-lucide="award"></i> Quay lại màn hình Kết quả
          </button>
        `;
      } else {
        paletteAction.innerHTML = `
          <button class="btn-primary" style="width: 100%; padding: 0.85rem;" onclick="if(confirm('Bạn có chắc chắn muốn nộp bài?')) window.math6App.submitExam()">
            <i data-lucide="send"></i> Nộp bài
          </button>
        `;
      }
    }
  }

  // ==========================================
  // SUBMIT EXAM, SAVE HISTORY & SCORING
  // ==========================================
  submitExam() {
    if (this.state.session.timerTimerId) {
      clearInterval(this.state.session.timerTimerId);
      this.state.session.timerTimerId = null;
    }
    const timerElement = document.getElementById('session-timer');
    if (timerElement) timerElement.style.display = 'none';

    this.state.session.isSubmitted = true;

    const { questions, userAnswers, initialDurationSeconds, timeRemaining, mode, title, topicId, chapterId, suiteId } = this.state.session;
    let correctCount = 0;

    const bloom = {
      EASY: { label: 'Nhận biết', total: 0, correct: 0 },
      MEDIUM: { label: 'Thông hiểu', total: 0, correct: 0 },
      HARD: { label: 'Vận dụng', total: 0, correct: 0 },
      ADVANCED: { label: 'Vận dụng cao', total: 0, correct: 0 }
    };

    questions.forEach(q => {
      const diff = q.difficulty || 'MEDIUM';
      if (!bloom[diff]) bloom[diff] = { label: diff, total: 0, correct: 0 };
      bloom[diff].total++;

      const userAns = userAnswers[q.id];
      let isCorrect = false;

      if (q.type === 'multiple_choice') {
        if (Array.isArray(userAns) && Array.isArray(q.correct_answer)) {
          isCorrect = userAns.length === q.correct_answer.length &&
            userAns.every(v => q.correct_answer.includes(v));
        }
      } else {
        isCorrect = userAns !== undefined && String(userAns).trim() === String(q.correct_answer).trim();
      }

      if (isCorrect) {
        correctCount++;
        bloom[diff].correct++;
      }
    });

    const finalScore = ((correctCount / questions.length) * 10).toFixed(2);
    this.state.session.score = finalScore;
    this.state.session.bloomStats = bloom;

    const durationSpent = initialDurationSeconds > 0 ? (initialDurationSeconds - timeRemaining) : 60;

    // Tự động ghi vào lịch sử (Tab 5: Lịch sử)
    saveLearningRecord({
      title: title,
      mode: mode,
      score: finalScore,
      correctCount: correctCount,
      totalQuestions: questions.length,
      durationSeconds: durationSpent,
      topicId: topicId,
      chapterId: chapterId,
      suiteId: suiteId,
      bloomStats: bloom
    });

    // Cập nhật tức thì điểm cao nhất & xếp loại cho các thẻ bài học và đề thi
    this.renderCurriculum();
    this.renderExamSuites();

    // Render kết quả
    this.renderResultCard(finalScore, correctCount, questions.length, bloom);
    this.showView('result');

    if (parseFloat(finalScore) >= 8 && window.confetti) {
      window.confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  exitResultView() {
    if (this.state.session && this.state.session.mode === 'exam') {
      this.renderExamSuites();
      this.showView('exams');
    } else {
      this.renderCurriculum();
      this.showView('curriculum');
    }
  }

  renderResultCard(score, correct, total, bloom) {
    const container = document.getElementById('result-card-container');
    if (!container) return;

    const isExam = this.state.session && this.state.session.mode === 'exam';
    const backBtnLabel = isExam ? 'Về danh sách Đề thi' : 'Về danh sách Bài học';
    const backBtnIcon = isExam ? 'award' : 'book-open';

    let bloomHtml = '';
    for (const [key, val] of Object.entries(bloom)) {
      if (val.total === 0) continue;
      const pct = Math.round((val.correct / val.total) * 100);
      const color = key === 'EASY' ? '#10b981' : (key === 'MEDIUM' ? '#3b82f6' : (key === 'HARD' ? '#f59e0b' : '#ef4444'));

      bloomHtml += `
        <div class="bloom-item">
          <div class="bloom-item-header">
            <span>${val.label}</span>
            <span style="color: ${color}; font-weight: 800;">${val.correct}/${val.total} (${pct}%)</span>
          </div>
          <div class="bloom-progress-track">
            <div class="bloom-progress-bar" style="width: ${pct}%; background: ${color};"></div>
          </div>
        </div>
      `;
    }

    // Đánh giá 5 mức xếp loại nếu bài kiểm tra từ 20 câu trở lên (20 câu cuối chương, 30 câu / 45p, 40 câu / 60p)
    let gradeBadgeHtml = '';
    if (total >= 20) {
      const grade = calculateGradeStatus(score, total);
      if (grade) {
        gradeBadgeHtml = `
          <div style="margin: 0.85rem auto 0.65rem; text-align: center;">
            <span class="grade-badge ${grade.gradeClass} grade-badge-lg">
              XẾP LOẠI: ${grade.gradeStatus.toUpperCase()}
            </span>
          </div>
        `;
      }
    }

    container.innerHTML = `
      <div class="result-card">
        <button class="result-close-btn" onclick="window.math6App.exitResultView()" title="${backBtnLabel}">
          <i data-lucide="x"></i>
        </button>
        <h2 style="font-family: var(--font-heading); font-size: 1.85rem; font-weight: 800;">
          KẾT QUẢ BÀI THI / LUYỆN TẬP
        </h2>
        <p style="color: var(--text-secondary); margin-top: 0.25rem;">${this.state.session.title}</p>

        <div class="result-score-circle">
          <div class="score-num">${score}</div>
          <div class="score-max">Điểm / 10</div>
        </div>
        ${gradeBadgeHtml}

        <p style="font-size: 1.1rem; font-weight: 700;">
          Bạn đã làm đúng <span style="color: var(--success);">${correct}</span> trên tổng số <span>${total}</span> câu hỏi!
        </p>

        <h4 style="margin-top: 2rem; font-family: var(--font-heading); text-align: left; font-size: 1.1rem;">
          <i data-lucide="pie-chart"></i> Đánh giá năng lực theo 4 mức độ tư duy (BGD&ĐT):
        </h4>

        <div class="bloom-matrix-breakdown">
          ${bloomHtml}
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
          <button class="btn-primary" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);" onclick="window.math6App.exitResultView()">
            <i data-lucide="${backBtnIcon}"></i> ${backBtnLabel}
          </button>
          <button class="btn-primary" onclick="window.math6App.reviewSessionAnswers()">
            <i data-lucide="eye"></i> Xem lại bài làm & Lời giải chi tiết
          </button>
          <button class="btn-secondary" onclick="window.math6App.showView('history')">
            <i data-lucide="history"></i> Xem lịch sử học tập
          </button>
          <button class="btn-secondary" onclick="window.print()">
            <i data-lucide="printer"></i> In kết quả
          </button>
        </div>
      </div>
    `;

    this.refreshIcons();
  }

  // ==========================================
  // ISOLATED PER-ITEM HISTORY MODAL
  // ==========================================
  openItemHistoryModal(type, id, title) {
    const modal = document.getElementById('item-history-modal');
    if (!modal) return;

    const modalTitle = document.getElementById('modal-item-title');
    const modalStats = document.getElementById('modal-item-stats');
    const modalTable = document.getElementById('modal-item-table-container');
    const modalFooter = document.getElementById('modal-item-footer');

    if (modalTitle) modalTitle.textContent = title;

    let criteria = {};
    if (type === 'exam') criteria = { suiteId: id };
    else if (type === 'chapter') criteria = { chapterId: id };
    else criteria = { topicId: id };

    const history = getTargetHistory(criteria);

    const s = this.state.session;
    const isOngoingTarget = s && !s.isSubmitted && (s.questions || []).length > 0 && (
      (type === 'exam' && s.suiteId === id) ||
      (type === 'chapter' && s.chapterId === id && !s.topicId) ||
      (type === 'lesson' && s.topicId === id)
    );

    let ongoingModalBanner = '';
    if (isOngoingTarget) {
      const answeredCount = Object.keys(s.userAnswers || {}).length;
      const totalQuestions = (s.questions || []).length;
      ongoingModalBanner = `
        <div style="background: rgba(245, 158, 11, 0.12); border: 1.5px solid #f59e0b; border-radius: var(--radius-md); padding: 0.85rem 1.15rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="in-progress-badge"><i data-lucide="play-circle"></i> Đang tiến hành</span>
            <span style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">Bài tập đang tiến hành: đã trả lời <strong>${answeredCount}/${totalQuestions} câu</strong></span>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn-primary" style="font-size: 0.8rem; padding: 0.35rem 0.85rem;" onclick="window.math6App.closeItemHistoryModal(); window.math6App.showView('session');">
              <i data-lucide="play"></i> Tiếp tục làm bài
            </button>
            <button class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.65rem; color: var(--danger); border-color: rgba(239, 68, 68, 0.4);" onclick="window.math6App.closeItemHistoryModal(); window.math6App.cancelActiveSession();" title="Hủy bỏ bài làm đang tiến hành">
              <i data-lucide="x"></i> Hủy phiên
            </button>
          </div>
        </div>
      `;
    }

    if (history.length === 0) {
      if (modalStats) {
        modalStats.innerHTML = `
          <div class="modal-stat-box"><div class="modal-stat-val">${isOngoingTarget ? '1 (Đang tiến hành)' : '0'}</div><div class="modal-stat-lbl">Số lần làm</div></div>
          <div class="modal-stat-box"><div class="modal-stat-val" style="color: var(--text-muted);">—</div><div class="modal-stat-lbl">Điểm cao nhất</div></div>
          <div class="modal-stat-box"><div class="modal-stat-val" style="color: var(--text-muted);">—</div><div class="modal-stat-lbl">Điểm trung bình</div></div>
        `;
      }
      if (modalTable) {
        modalTable.innerHTML = `
          ${ongoingModalBanner}
          <div class="history-empty" style="padding: ${isOngoingTarget ? '1.5rem 1rem' : '2.5rem 1rem'};">
            <i data-lucide="history"></i>
            <h3>${isOngoingTarget ? 'Đang trong quá trình làm bài' : 'Chưa có dữ liệu bài làm'}</h3>
            <p>${isOngoingTarget ? 'Bạn đang có một phiên làm bài chưa nộp ở trên. Bấm "Tiếp tục làm bài" để làm tiếp hoặc "Hủy phiên" để làm mới!' : 'Bạn chưa hoàn thành bài tập nào trong phần này. Hãy chọn bài để bắt đầu luyện tập và lưu lại kết quả!'}</p>
          </div>
        `;
      }
      if (modalFooter) {
        const retryLabel = type === 'exam' ? 'Bắt đầu làm đề thi ngay' : (type === 'chapter' ? 'Ôn tập cuối chương (20 câu)' : 'Bắt đầu làm ngay');
        modalFooter.innerHTML = `
          <button class="btn-secondary" onclick="window.math6App.closeItemHistoryModal()">Đóng</button>
          <button class="btn-primary" id="modal-retry-action-btn">
            <i data-lucide="play-circle"></i> ${retryLabel}
          </button>
        `;
      }
    } else {
      let maxScore = -1;
      let sumScore = 0;
      let bestRecord = history[0];
      history.forEach(h => {
        const s = parseFloat(h.score) || 0;
        if (s > maxScore) {
          maxScore = s;
          bestRecord = h;
        }
        sumScore += s;
      });
      const avgScore = (sumScore / history.length).toFixed(1);

      let gradeBadgeHtml = '';
      if (bestRecord.totalQuestions >= 20 && bestRecord.gradeStatus) {
        gradeBadgeHtml = `<div style="margin-top: 0.25rem;"><span class="grade-badge ${bestRecord.gradeClass}">${bestRecord.gradeStatus}</span></div>`;
      }

      if (modalStats) {
        modalStats.innerHTML = `
          <div class="modal-stat-box">
            <div class="modal-stat-val">${history.length}${isOngoingTarget ? ' (+1)' : ''}</div>
            <div class="modal-stat-lbl">Số lần làm</div>
          </div>
          <div class="modal-stat-box">
            <div class="modal-stat-val" style="color: var(--accent-primary);">${maxScore.toFixed(1)} / 10</div>
            <div class="modal-stat-lbl">Điểm cao nhất</div>
            ${gradeBadgeHtml}
          </div>
          <div class="modal-stat-box">
            <div class="modal-stat-val">${avgScore} / 10</div>
            <div class="modal-stat-lbl">Điểm trung bình</div>
          </div>
        `;
      }

      if (modalTable) {
        const rowsHtml = history.map(item => {
          const s = parseFloat(item.score) || 0;
          let badgeClass = 'score-mid';
          if (s >= 8.0) badgeClass = 'score-high';
          else if (s < 5.0) badgeClass = 'score-low';

          const mins = Math.floor((item.durationSeconds || 0) / 60);
          const secs = (item.durationSeconds || 0) % 60;
          const durationStr = `${mins}p ${secs}s`;

          const gradeCell = (item.totalQuestions >= 20 && item.gradeStatus)
            ? `<td><span class="grade-badge ${item.gradeClass}">${item.gradeStatus}</span></td>`
            : `<td><span style="color: var(--text-muted); font-size: 0.85rem;">—</span></td>`;

          return `
            <tr>
              <td><strong style="color: var(--text-primary); font-size: 0.88rem;">${item.title}</strong></td>
              <td><span style="font-size: 0.82rem; color: var(--text-secondary);">${item.formattedDate}</span></td>
              <td><span class="score-badge ${badgeClass}">${item.score} / 10</span></td>
              ${gradeCell}
              <td><strong>${item.correctCount} / ${item.totalQuestions}</strong></td>
              <td><span style="font-size: 0.82rem; color: var(--text-secondary);">${durationStr}</span></td>
            </tr>
          `;
        }).join('');

        modalTable.innerHTML = `
          ${ongoingModalBanner}
          <table class="history-table">
            <thead>
              <tr>
                <th>Nội dung bài làm</th>
                <th>Thời gian nộp</th>
                <th>Điểm số</th>
                <th>Xếp loại</th>
                <th>Kết quả</th>
                <th>Thời lượng</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        `;
      }

      if (modalFooter) {
        const retryLabel = type === 'exam' ? 'Làm lại đề thi này' : (type === 'chapter' ? 'Ôn tập cuối chương (20 câu)' : 'Làm lại bài học này');
        modalFooter.innerHTML = `
          <button class="btn-secondary" onclick="window.math6App.closeItemHistoryModal()">Đóng</button>
          <button class="btn-primary" id="modal-retry-action-btn">
            <i data-lucide="rotate-ccw"></i> ${retryLabel}
          </button>
        `;
      }
    }

    const retryBtn = document.getElementById('modal-retry-action-btn');
    if (retryBtn) {
      retryBtn.onclick = () => {
        this.closeItemHistoryModal();
        if (type === 'exam') {
          this.startExamSuite(id);
        } else if (type === 'chapter') {
          this.startPracticeChapter(id, title);
        } else {
          let foundChap = null;
          for (const v of CURRICULUM) {
            for (const c of v.chapters) {
              if (c.lessons.some(l => l.id === id)) {
                foundChap = c;
                break;
              }
            }
            if (foundChap) break;
          }
          this.startPracticeLesson(id, foundChap ? foundChap.id : null, title);
        }
      };
    }

    modal.style.display = 'flex';
    modal.classList.add('active');
    this.refreshIcons();
  }

  closeItemHistoryModal() {
    const modal = document.getElementById('item-history-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
    }
  }

  reviewSessionAnswers() {
    this.showView('session');
    this.renderCurrentQuestion();
    this.renderPalette();
  }
}

// Khởi tạo app
window.addEventListener('DOMContentLoaded', () => {
  window.math6App = new Math6App();
});
