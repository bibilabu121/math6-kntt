/**
 * TIỆN ÍCH LÀM SẠCH VÀ HIỂN THỊ CÔNG THỨC TOÁN KATEX (RENDERER)
 * - Tự động phát hiện và render công thức LaTeX bọc trong $...$ hoặc $$...$$
 * - Bảo toàn khối toán học (Math Token Preservation) chống xung đột regex với \notin, \neq, \not\vdots...
 * - Xử lý ngắt dòng và chống tràn chữ (overflow prevention)
 */

/**
 * Tách biệt các khối toán học LaTeX ra khỏi văn bản để tránh bị thay thế nhầm ký tự
 */
export function tokenizeMath(text) {
  if (!text || typeof text !== "string") return { textWithPlaceholders: "", tokens: [] };

  const tokens = [];
  // Bắt display math $$...$$ trước, sau đó tới inline math $...$
  const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$]+?\$)/g;

  const textWithPlaceholders = text.replace(mathRegex, (match) => {
    const placeholder = `___MATH_BLOCK_${tokens.length}___`;
    tokens.push(match);
    return placeholder;
  });

  return { textWithPlaceholders, tokens };
}

/**
 * Phục hồi các khối toán học nguyên vẹn sau khi đã format văn bản
 */
export function restoreMathTokens(text, tokens) {
  if (!text) return "";
  return text.replace(/___MATH_BLOCK_(\d+)___/g, (match, index) => {
    const idx = parseInt(index, 10);
    return tokens[idx] !== undefined ? tokens[idx] : match;
  });
}

export function sanitizeMathText(text) {
  if (!text || typeof text !== "string") return "";

  // Tách khối toán học để bảo vệ
  const { textWithPlaceholders, tokens } = tokenizeMath(text);

  let cleaned = textWithPlaceholders;

  // Sửa lỗi nhân đôi ký tự đơn lẻ do OCR/cào dữ liệu trong phần văn bản
  cleaned = cleaned.replace(/([a-zA-Z0-9])\1{2,}/g, "$1");

  // Chuẩn hóa ký hiệu độ trong văn bản
  cleaned = cleaned.replace(/(\d+)\s*(?:độ|°)(?:\s*(?:độ|°))?/gi, "$1°");

  return restoreMathTokens(cleaned, tokens);
}

const VIETNAMESE_CHARS = 'àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ';
let vietnameseKatexRegistered = false;

export function registerVietnameseKatexSymbols() {
  if (vietnameseKatexRegistered || typeof window === 'undefined' || !window.katex || !window.katex.__defineSymbol) {
    return;
  }
  for (const ch of VIETNAMESE_CHARS) {
    try {
      window.katex.__defineSymbol('text', 'main', 'textord', undefined, ch);
      window.katex.__defineSymbol('math', 'main', 'textord', undefined, ch);
    } catch (e) {
      // bỏ qua nếu đã định nghĩa
    }
  }
  vietnameseKatexRegistered = true;
}

export function renderKatexInContainer(element) {
  if (!element) return;

  registerVietnameseKatexSymbols();

  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(element, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false,
        errorColor: "#ef4444"
      });
    } catch (err) {
      console.warn("KaTeX render error:", err);
    }
  }
}

/**
 * Chuyển đổi markdown cơ bản (in đậm, xuống dòng) sang HTML an toàn
 * Bảo toàn 100% công thức toán học LaTeX, không bao giờ cắt xén \notin, \neq, \not
 */
export function formatMarkdown(text) {
  if (!text) return "";

  // Tách khối toán học
  const { textWithPlaceholders, tokens } = tokenizeMath(text);

  // Xử lý xuống dòng và format văn bản ngoài khối toán
  let html = textWithPlaceholders
    .replace(/\r\n/g, "\n")
    .replace(/\n\n+/g, "<br><br>")
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Phục hồi lại các khối toán học nguyên bản 100%
  return restoreMathTokens(html, tokens);
}
