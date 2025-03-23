const expData = [
  {
    id: "zenith",
    name: "Zenith",
    desc: "The best overall value exploit.",
    lvl: 8,
    price: "$6.49",
    period: "weekly",
    plat: ["windows"],
    pros: ["Amazing uptime, stability & power", "The best overall value", "Has a decompiler", "100% sUNC", "Level 8"],
    neutral: [],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-yellow-500",
    accentColor: "from-purple-600 to-purple-700",
    premium: true,
  },
  {
    id: "awp",
    name: "AWP.gg",
    desc: "Emulates Roblox for maximum safety.",
    lvl: 8,
    price: "$6.99",
    period: "weekly",
    plat: ["windows"],
    pros: ["Emulates Roblox for safety", "Has a decompiler", "100% sUNC", "Level 8"],
    neutral: [],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-red-500",
    accentColor: "from-red-600 to-red-700",
    premium: true,
  },
  {
    id: "wave",
    name: "Wave",
    desc: "Amazing exploit with regular updates.",
    lvl: 8,
    price: "$7.49",
    period: "weekly",
    plat: ["windows"],
    pros: ["Amazing updating schedule", "Has a decompiler", "100% sUNC", "Level 8"],
    neutral: [],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-blue-500",
    accentColor: "from-blue-600 to-blue-700",
    premium: true,
  },
  {
    id: "macsploit",
    name: "Macsploit",
    desc: "A powerful exploit for macOS.",
    lvl: 8,
    price: "$9.99",
    period: "lifetime",
    plat: ["macos"],
    pros: ["Has a decompiler", "98% UNC", "Level 8"],
    neutral: ["Updates are slightly late"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-green-500",
    accentColor: "from-green-600 to-green-700",
  },
  {
    id: "seliware",
    name: "Seliware",
    desc: "A reliable exploit with excellent support.",
    lvl: 8,
    price: "$9.99",
    period: "monthly",
    plat: ["windows"],
    pros: ["Has a decompiler", "100% sUNC", "Level 8"],
    neutral: [],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-red-500",
    accentColor: "from-red-600 to-red-700",
    premium: false,
  },
  {
    id: "cryptic",
    name: "Cryptic",
    desc: "A versatile exploit with strong security features.",
    lvl: 8,
    price: "$4.99",
    period: "monthly",
    plat: ["windows", "ios", "android"],
    pros: ["100% UNC", "Level 8"],
    neutral: ["Has a keysystem"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-purple-500",
    accentColor: "from-purple-600 to-purple-700",
  },
  {
    id: "codex",
    name: "CodeX",
    desc: "A powerful exploit with advanced features.",
    lvl: 8,
    price: "$4.97",
    period: "monthly",
    plat: ["windows", "ios", "android"],
    pros: ["98% UNC", "Level 8"],
    neutral: ["Issues with the keysystem", "Uses core technology from ArceusX"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-yellow-500",
    accentColor: "from-yellow-600 to-yellow-700",
  },
  {
    id: "matcha",
    name: "Matcha",
    desc: "An external exploit with driver-based execution.",
    lvl: 7,
    price: "$9.99",
    period: "lifetime",
    plat: ["windows"],
    pros: ["External", "Driver based", "Decompiler + Explorer"],
    neutral: [],
    cons: [],
    verified: false,
    editor: "sk337",
    txtColor: "text-green-500",
    accentColor: "from-green-600 to-green-700",
  },
  {
    id: "solara",
    name: "Solara v3",
    desc: "A free exploit with decent performance.",
    lvl: 3,
    price: "FREE",
    plat: ["windows"],
    pros: ["Has a decompiler", "51% sUNC"],
    neutral: ["Level 3", "Not stable"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-blue-500",
    accentColor: "from-blue-600 to-blue-700",
  },
  {
    id: "xeno",
    name: "Xeno",
    desc: "A free exploit with basic features.",
    lvl: 3,
    price: "FREE",
    plat: ["windows"],
    pros: ["Has a decompiler", "41% sUNC"],
    neutral: ["Level 3"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-red-500",
    accentColor: "from-red-600 to-red-700",
  },
  {
    id: "krnl",
    name: "KRNL",
    desc: "A popular free exploit with good performance.",
    lvl: 8,
    price: "FREE",
    plat: ["windows", "android"],
    pros: ["100% UNC", "Level 8"],
    neutral: ["Includes a keysystem"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-red-500",
    accentColor: "from-red-600 to-red-700",
  },
  {
    id: "delta",
    name: "Delta",
    desc: "A powerful multi-platform exploit.",
    lvl: 8,
    price: "FREE",
    plat: ["windows", "ios", "android"],
    pros: ["Best script support", "100% UNC", "Level 8"],
    neutral: ["Includes a keysystem"],
    cons: [],
    verified: false,
    editor: "imveryh4ppy",
    txtColor: "text-blue-500",
    accentColor: "from-blue-600 to-blue-700",
  },
  {
    id: "zorara",
    name: "Zorara",
    desc: "A rebranded version of Xeno.",
    lvl: 3,
    price: "FREE",
    plat: ["windows", "android"],
    pros: ["41% sUNC"],
    neutral: ["Level 3", "Has a keysystem", "Xeno - rebranded"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-purple-500",
    accentColor: "from-purple-600 to-purple-700",
  },
  {
    id: "dx9ware",
    name: "DX9WARE V2",
    desc: "An external exploit focused on safety.",
    lvl: 6,
    price: "$3.25",
    period: "per week",
    plat: ["windows"],
    pros: ["External - More safety, less features", "Safest option for main"],
    neutral: ["Doesn't have Lifetime subscription", "Early Beta - expect bugs and instability"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-red-500",
    accentColor: "from-red-600 to-red-700",
  },
  {
    id: "velocity",
    name: "Velocity",
    desc: "A new free exploit with good performance.",
    lvl: 8,
    price: "FREE",
    plat: ["windows"],
    pros: ["Has a decompiler", "98% sUNC", "Level 8"],
    neutral: ["New exploit- Safety is unknown"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-blue-500",
    accentColor: "from-blue-600 to-blue-700",
  },
  {
    id: "apple-ware",
    name: "Apple-Ware",
    desc: "A specialized exploit for iOS devices.",
    lvl: 8,
    price: "FREE",
    plat: ["ios", "android"],
    pros: ["100% UNC~", "Level 8"],
    neutral: ["Delta paste", "Faked their UNC"],
    cons: [],
    verified: false,
    editor: "voxlis.NET",
    txtColor: "text-green-500",
    accentColor: "from-green-600 to-green-700",
  },
  {
    id: "jjsploit",
    name: "JJSploit",
    desc: "A basic exploit with no key system.",
    lvl: 3,
    price: "FREE",
    plat: ["windows"],
    pros: ["No keysystem", "40% sUNC~"],
    neutral: ["Level 3", "Xeno - rebranded"],
    cons: [],
    verified: false,
    editor: "voxlis.NET",
    txtColor: "text-blue-500",
    accentColor: "from-blue-600 to-blue-700",
  },
  {
    id: "vegax",
    name: "VegaX",
    desc: "A powerful exploit with short key duration.",
    lvl: 8,
    price: "FREE",
    plat: ["windows", "android"],
    pros: ["2 day long keys", "98% UNC", "Level 8"],
    neutral: ["Owned By 1 F0", "Includes a Key System"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-purple-500",
    accentColor: "from-purple-600 to-purple-700",
  },
  {
    id: "ronix",
    name: "Ronix",
    desc: "A new exploit with high UNC percentage.",
    lvl: 8,
    price: "FREE",
    plat: ["windows", "android"],
    pros: ["2 day long keys", "99% UNC", "Level 8"],
    neutral: ["New exploit", "Includes a Key System"],
    cons: [],
    verified: true,
    editor: "voxlis.NET",
    txtColor: "text-red-500",
    accentColor: "from-red-600 to-red-700",
  },
  {
    id: "aimmy",
    name: "Aimmy",
    desc: "An AI-based exploit with support for multiple games.",
    lvl: 6,
    price: "FREE",
    plat: ["windows"],
    pros: ["Supports other games", "No keysystem", "Safe to use", "AI-based"],
    neutral: ["Requires GTX 1050 or better", "Requires training the model"],
    cons: [],
    verified: false,
    editor: "voxlis.NET",
    txtColor: "text-green-500",
    accentColor: "from-green-600 to-green-700",
  },
  {
    id: "df",
    name: "DF",
    desc: "A simple exploit that requires no installation.",
    lvl: 2,
    price: "FREE",
    plat: ["windows", "ios", "macos"],
    pros: ["No installation needed"],
    neutral: ["Level 2", "0% UNC", "Works in one game"],
    cons: [],
    verified: false,
    editor: "voxlis.NET",
    txtColor: "text-blue-500",
    accentColor: "from-blue-600 to-blue-700",
  },
  {
    id: "arceusx",
    name: "ArceusX",
    desc: "A mobile exploit with high UNC percentage.",
    lvl: 8,
    price: "FREE",
    plat: ["windows", "ios", "android"],
    pros: ["98% UNC~", "Level 8"],
    neutral: ["Similar to CodeX", "Long keysystem"],
    cons: ["Stole user data in 2021"],
    verified: false,
    editor: "voxlis.NET",
    txtColor: "text-yellow-500",
    accentColor: "from-yellow-600 to-yellow-700",
  },
  {
    id: "nezur",
    name: "Nezur",
    desc: "An external AI-based exploit with many features.",
    lvl: 7,
    price: "FREE",
    plat: ["windows", "android"],
    pros: ["External + AI-Based", "Ton of features"],
    neutral: ["Includes a keysystem", "Uses old version of AIMMY"],
    cons: ["Owner has a shady background"],
    verified: false,
    editor: "voxlis.NET",
    txtColor: "text-purple-500",
    accentColor: "from-purple-600 to-purple-700",
  },
  {
    id: "argon",
    name: "Argon",
    desc: "A powerful exploit with 100% UNC.",
    lvl: 8,
    price: "FREE",
    plat: ["windows"],
    pros: ["Has a decompiler", "100% sUNC", "Level 8"],
    neutral: [],
    cons: ["Old owner used to exit scam ALOT", "Safety is not verified by voxlis.NET", "Not verified by voxlis.NET"],
    verified: false,
    editor: "Requested",
    txtColor: "text-red-500",
    accentColor: "from-red-600 to-red-700",
  },
  {
    id: "mint",
    name: "Mint",
    desc: "A keyless exploit with moderate UNC percentage.",
    lvl: 3,
    price: "FREE",
    plat: ["windows"],
    pros: ["Free to use", "34% sUNC", "Keyless"],
    neutral: ["Level 3"],
    cons: ["Safety is not verified by voxlis.NET", "Not verified by voxlis.NET"],
    verified: false,
    editor: "Console",
    txtColor: "text-green-500",
    accentColor: "from-green-600 to-green-700",
  },
  {
    id: "ratware",
    name: "Ratware",
    desc: "A popular exploit with many users.",
    lvl: 8,
    price: "FREE",
    plat: ["windows"],
    pros: ["150,000+ Users", "100% UNC", "Level 8"],
    neutral: [],
    cons: ["Safety is not verified by voxlis.NET", "Not verified by voxlis.NET"],
    verified: false,
    editor: "Mr. Ratter",
    txtColor: "text-blue-500",
    accentColor: "from-blue-600 to-blue-700",
  },
]

const st = {
  view: "grid",
  qry: "",
  pltFlt: [],
  lvlFlt: [0, 0],
  prcFlt: "all",
  vrfOnly: false,
  premOnly: false,
  extOnly: false,
  execOnly: false,
  srtBy: "recommended",
  fltrd: [...expData],
}

const els = {
  hdr: document.getElementById("hdr"),
  hero: document.getElementById("heroSec"),
  menuTgl: document.getElementById("mobMenuTgl"),
  menu: document.getElementById("mobMenu"),
  srch: document.getElementById("srchInp"),
  mSrch: document.getElementById("mobSrchInp"),
  clrBtn: document.getElementById("clrSrch"),
  mClrBtn: document.getElementById("mobClrSrch"),
  fltrBtn: document.getElementById("fltrBtn"),
  mFltrBtn: document.getElementById("mobFltrBtn"),
  drwr: document.getElementById("fltrDrwr"),
  applyBtn: document.getElementById("applyFltrs"),
  lvlSldr: document.getElementById("lvlSldr"),
  mLvlSldr: document.getElementById("mobLvlSldr"),
  lvlVal: document.getElementById("lvlMaxVal"),
  mLvlVal: document.getElementById("mobLvlMaxVal"),
  lvlFill: document.getElementById("lvlTrkFill"),
  mLvlFill: document.getElementById("mobLvlTrkFill"),
  vrfSwch: document.getElementById("vrfSwch"),
  mVrfSwch: document.getElementById("mobVrfSwch"),
  premSwch: document.getElementById("premSwch"),
  mPremSwch: document.getElementById("mobPremSwch"),
  extSwch: document.getElementById("extSwch"),
  mExtSwch: document.getElementById("mobExtSwch"),
  execSwch: document.getElementById("execSwch"),
  mExecSwch: document.getElementById("mobExecSwch"),
  srtSel: document.getElementById("srtSel"),
  mSrtSel: document.getElementById("mobSortSel"),
  rstBtn: document.getElementById("rstFltrs"),
  mRstBtn: document.getElementById("mobRstFltrs"),
  rstAllBtn: document.getElementById("rstAllFltrs"),
  grid: document.getElementById("expsGrid"),
  list: document.getElementById("expsList"),
  noRes: document.getElementById("noRes"),
  fltCnt: document.getElementById("fltrdCnt"),
  ttlCnt: document.getElementById("ttlCnt"),
  tabBtns: document.querySelectorAll(".tab-trgr"),
  tabCntnt: document.querySelectorAll(".tab-cntnt"),
  cnv: document.getElementById("strCnv"),
  loadingScreen: document.getElementById("loadingScreen"),
  loadingBar: document.getElementById("loadingBar"),
  logoTxtGrd: document.querySelector(".logo-txt-grd"),
  logoTxtLt: document.querySelectorAll(".logo-txt-lt"),
  themeDropdown: document.getElementById("themeDropdown"),
  themeDropdownSelected: document.getElementById("themeDropdownSelected"),
  themeDropdownOptions: document.getElementById("themeDropdownOptions"),
}

function crtUncMdl() {
  const modalContainer = document.createElement("div")
  modalContainer.className = "unc-modal-container"
  modalContainer.id = "uncModalContainer"
  modalContainer.style.display = "none"

  modalContainer.innerHTML = `
    <div class="unc-modal-overlay" id="uncModalOverlay"></div>
    <div class="unc-modal">
      <div class="unc-modal-header">
        <h2 class="unc-modal-title" id="uncModalTitle">UNC Code</h2>
      </div>
      <div class="unc-modal-content">
        <div class="unc-modal-info">
          <div class="unc-modal-exploit-info" id="uncModalExploitInfo">
            <div class="unc-modal-exploit-name" id="uncModalExploitName"></div>
            <div class="unc-modal-exploit-desc" id="uncModalExploitDesc"></div>
          </div>
        </div>
        <div class="unc-modal-code-container">
          <div class="unc-modal-code-header">
            <div class="unc-modal-code-title">UNC Code</div>
            <button class="unc-modal-copy-btn" id="uncModalCopyBtn">
              <i class="fas fa-copy"></i> Copy
            </button>
          </div>
          <pre class="unc-modal-code" id="uncModalCode"></pre>
        </div>
        <div class="unc-modal-loading" id="uncModalLoading">
          <div class="unc-modal-spinner"></div>
          <div class="unc-modal-loading-text">Loading UNC data...</div>
        </div>
        <div class="unc-modal-error" id="uncModalError">
          <i class="fas fa-exclamation-triangle"></i>
          <div class="unc-modal-error-text" id="uncModalErrorText">Failed to load UNC data</div>
        </div>
      </div>
      <div class="unc-modal-footer">
        <button class="unc-modal-btn unc-modal-btn-primary" id="uncModalCloseBtn">
          <i class="fas fa-times"></i> Close
        </button>
      </div>
    </div>
  `

  document.body.appendChild(modalContainer)
  document.getElementById("uncModalOverlay").addEventListener("click", clsUncMdl)
  document.getElementById("uncModalCloseBtn").addEventListener("click", clsUncMdl)

  document.getElementById("uncModalCopyBtn").addEventListener("click", () => {
    const codeElement = document.getElementById("uncModalCode")
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || "")
      const copyBtn = document.getElementById("uncModalCopyBtn")
      const originalText = copyBtn.innerHTML
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!'
      setTimeout(() => {
        copyBtn.innerHTML = originalText
      }, 2000)
    }
  })
}

function shwNtf(msg, type = "error") {
  let container = document.getElementById("custom-notifications")
  if (!container) {
    container = document.createElement("div")
    container.id = "custom-notifications"
    container.style.position = "fixed"
    container.style.top = "20px"
    container.style.right = "20px"
    container.style.zIndex = "9999"
    container.style.display = "flex"
    container.style.flexDirection = "column"
    container.style.gap = "10px"
    document.body.appendChild(container)
  }

  const notif = document.createElement("div")
  notif.className = `custom-notification ${type}`
  notif.style.position = "relative"
  notif.style.minWidth = "320px"
  notif.style.maxWidth = "450px"
  notif.style.overflow = "hidden"
  notif.style.borderRadius = "12px"
  notif.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 5px 10px -5px rgba(0, 0, 0, 0.2)"
  notif.style.transform = "translateX(120%)"
  notif.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease"
  notif.style.margin = "0 0 10px 0"
  notif.style.opacity = "1"

  const bgColor = type === "error" ? "rgba(239, 68, 68, 0.85)" : "rgba(59, 130, 246, 0.85)"
  notif.style.background = bgColor
  notif.style.backdropFilter = "blur(10px)"
  notif.style.border = type === "error" ? "1px solid rgba(248, 113, 113, 0.4)" : "1px solid rgba(96, 165, 250, 0.4)"

  const content = document.createElement("div")
  content.style.padding = "16px 20px"
  content.style.display = "flex"
  content.style.alignItems = "flex-start"
  content.style.gap = "15px"
  content.style.position = "relative"
  content.style.zIndex = "1"

  const decorativeLine = document.createElement("div")
  decorativeLine.style.position = "absolute"
  decorativeLine.style.top = "0"
  decorativeLine.style.left = "0"
  decorativeLine.style.width = "4px"
  decorativeLine.style.height = "100%"
  decorativeLine.style.background = "rgba(255, 255, 255, 0.9)"
  decorativeLine.style.borderRadius = "2px"
  content.appendChild(decorativeLine)

  const iconContainer = document.createElement("div")
  iconContainer.style.display = "flex"
  iconContainer.style.alignItems = "center"
  iconContainer.style.justifyContent = "center"
  iconContainer.style.width = "32px"
  iconContainer.style.height = "32px"
  iconContainer.style.borderRadius = "50%"
  iconContainer.style.background = "rgba(255, 255, 255, 0.25)"
  iconContainer.style.flexShrink = "0"

  const icon = document.createElement("i")
  icon.className = type === "error" ? "fas fa-exclamation-circle" : "fas fa-info-circle"
  icon.style.color = "white"
  icon.style.fontSize = "16px"
  iconContainer.appendChild(icon)

  const msgContainer = document.createElement("div")
  msgContainer.style.flex = "1"

  const title = document.createElement("div")
  title.textContent = type === "error" ? "UNC Test Unavailable" : "Information"
  title.style.fontWeight = "600"
  title.style.fontSize = "14px"
  title.style.color = "white"
  title.style.marginBottom = "4px"
  title.style.letterSpacing = "0.3px"

  const msgText = document.createElement("div")
  msgText.textContent = msg
  msgText.style.fontSize = "13px"
  msgText.style.color = "rgba(255, 255, 255, 0.9)"
  msgText.style.lineHeight = "1.4"

  msgContainer.appendChild(title)
  msgContainer.appendChild(msgText)

  const closeBtn = document.createElement("button")
  closeBtn.innerHTML = '<i class="fas fa-times"></i>'
  closeBtn.style.background = "none"
  closeBtn.style.border = "none"
  closeBtn.style.color = "white"
  closeBtn.style.opacity = "0.7"
  closeBtn.style.cursor = "pointer"
  closeBtn.style.fontSize = "14px"
  closeBtn.style.padding = "4px"
  closeBtn.style.marginLeft = "8px"
  closeBtn.style.transition = "all 0.2s"
  closeBtn.style.display = "flex"
  closeBtn.style.alignItems = "center"
  closeBtn.style.justifyContent = "center"
  closeBtn.style.width = "24px"
  closeBtn.style.height = "24px"
  closeBtn.style.borderRadius = "50%"

  closeBtn.addEventListener("mouseover", () => {
    closeBtn.style.opacity = "1"
    closeBtn.style.background = "rgba(255, 255, 255, 0.2)"
  })

  closeBtn.addEventListener("mouseout", () => {
    closeBtn.style.opacity = "0.7"
    closeBtn.style.background = "none"
  })

  closeBtn.addEventListener("click", () => {
    notif.style.transform = "translateX(120%)"
    notif.style.opacity = "0"
    setTimeout(() => {
      notif.remove()
    }, 500)
  })

  content.appendChild(iconContainer)
  content.appendChild(msgContainer)
  content.appendChild(closeBtn)
  notif.appendChild(content)

  const progressBarContainer = document.createElement("div")
  progressBarContainer.style.position = "absolute"
  progressBarContainer.style.bottom = "0"
  progressBarContainer.style.left = "0"
  progressBarContainer.style.width = "100%"
  progressBarContainer.style.height = "3px"
  progressBarContainer.style.background = "rgba(0, 0, 0, 0.1)"

  const progressBar = document.createElement("div")
  progressBar.style.height = "100%"
  progressBar.style.width = "100%"
  progressBar.style.background = "rgba(255, 255, 255, 0.7)"
  progressBar.style.transition = "width 5s cubic-bezier(0.1, 0.5, 0.2, 1)"

  progressBarContainer.appendChild(progressBar)
  notif.appendChild(progressBarContainer)

  container.appendChild(notif)

  setTimeout(() => {
    notif.style.transform = "translateX(0)"
  }, 10)

  setTimeout(() => {
    progressBar.style.width = "0"
  }, 100)

  setTimeout(() => {
    notif.style.transform = "translateX(120%)"
    notif.style.opacity = "0"
    setTimeout(() => {
      notif.remove()
    }, 500)
  }, 5000)
}

async function ftchUncDt(id, name) {
  try {
    const response = await fetch(`https://voxlis.net/assets/unc/${id}.json`)
    if (response.status === 404) {
      shwNtf(`UNC/sUNC test for ${name} is unknown`, "error")
      throw new Error("UNC data not found")
    }
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const rawText = await response.text()
    return { code: rawText }
  } catch (error) {
    console.error("Error fetching UNC data:", error)
    throw error
  }
}

function opnUncMdl(exploit) {
  const modalContainer = document.getElementById("uncModalContainer")
  if (!modalContainer) {
    crtUncMdl()
  }

  const modalContainer2 = document.getElementById("uncModalContainer")
  const modalTitle = document.getElementById("uncModalTitle")
  const modalExploitName = document.getElementById("uncModalExploitName")
  const modalExploitDesc = document.getElementById("uncModalExploitDesc")
  const modalCode = document.getElementById("uncModalCode")
  const modalLoading = document.getElementById("uncModalLoading")
  const modalError = document.getElementById("uncModalError")

  modalContainer2.style.display = "flex"
  modalTitle.textContent = `${exploit.name} UNC Code`
  modalExploitName.textContent = exploit.name
  modalExploitDesc.textContent = exploit.desc

  modalLoading.style.display = "flex"
  modalCode.style.display = "none"
  modalError.style.display = "none"

  ftchUncDt(exploit.id, exploit.name)
    .then((data) => {
      modalLoading.style.display = "none"
      modalCode.style.display = "block"
      modalCode.textContent = data.code || "-- No UNC code available"
      if (window.hljs) {
        window.hljs.highlightElement(modalCode)
      }
    })
    .catch((error) => {
      modalLoading.style.display = "none"
      modalError.style.display = "flex"
      document.getElementById("uncModalErrorText").textContent =
        `Failed to load UNC data: ${error.message || "Unknown error"}`
    })

  setTimeout(() => {
    document.querySelector(".unc-modal").classList.add("show")
  }, 10)

  document.body.style.overflow = "hidden"
}

function clsUncMdl() {
  const modal = document.querySelector(".unc-modal")
  if (modal) {
    modal.classList.remove("show")
    setTimeout(() => {
      const container = document.getElementById("uncModalContainer")
      if (container) {
        container.style.display = "none"
      }
      document.body.style.overflow = ""
    }, 300)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("voxlis-theme") || "red"
  document.documentElement.setAttribute("data-theme", savedTheme)

  if (els.themeDropdown && els.themeDropdownSelected && els.themeDropdownOptions) {
    function updateSelectedTheme(theme) {
      const themeName = theme.charAt(0).toUpperCase() + theme.slice(1)
      els.themeDropdownSelected.innerHTML = `
        <div class="theme-color-indicator ${theme}"></div>
        <span>${themeName} Theme</span>
        <i class="fas fa-chevron-down"></i>
      `

      const options = els.themeDropdownOptions.querySelectorAll(".theme-dropdown-option")
      options.forEach((option) => {
        option.classList.remove("selected")
        if (option.getAttribute("data-theme") === theme) {
          option.classList.add("selected")
        }
      })
    }

    updateSelectedTheme(savedTheme)

    const sortDropdown = document.getElementById("sortDropdownSelected")
    const sortOptions = document.getElementById("sortDropdownOptions")
    const mobSortDropdown = document.getElementById("mobSortDropdownSelected")
    const mobSortOptions = document.getElementById("mobSortDropdownOptions")

    if (sortDropdown && sortOptions) {
      sortDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = sortDropdown.parentElement;
        dropdown.classList.toggle('active');
        
        document.querySelectorAll('.custom-dropdown').forEach(d => {
          if (d !== dropdown && d.classList.contains('active')) {
            d.classList.remove('active');
          }
        });
      });
    }

    if (mobSortDropdown && mobSortOptions) {
      mobSortDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = mobSortDropdown.parentElement;
        dropdown.classList.toggle('active');
        
        document.querySelectorAll('.custom-dropdown').forEach(d => {
          if (d !== dropdown && d.classList.contains('active')) {
            d.classList.remove('active');
          }
        });
      });
    }

    document.addEventListener("click", (e) => {
      document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove("active")
        }
      })
    })

    els.themeDropdownSelected.addEventListener("click", () => {
      els.themeDropdown.classList.toggle("active")
    })

    document.addEventListener("click", (e) => {
      if (!els.themeDropdown.contains(e.target)) {
        els.themeDropdown.classList.remove("active")
      }
    })

    const themeOptions = els.themeDropdownOptions.querySelectorAll(".theme-dropdown-option")
    themeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const theme = option.getAttribute("data-theme")
        document.documentElement.setAttribute("data-theme", theme)
        updateSelectedTheme(theme)
        localStorage.setItem("voxlis-theme", theme)
        els.themeDropdown.classList.remove("active")

        createThemeChangeEffect(theme)
      })
    })
  }

  function createThemeChangeEffect(theme) {
    const themeColor = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim()
    const ripple = document.createElement("div")
    ripple.style.position = "fixed"
    ripple.style.top = "50%"
    ripple.style.left = "50%"
    ripple.style.transform = "translate(-50%, -50%)"
    ripple.style.width = "10px"
    ripple.style.height = "10px"
    ripple.style.borderRadius = "50%"
    ripple.style.backgroundColor = themeColor
    ripple.style.opacity = "0.3"
    ripple.style.transition = "all 0.6s cubic-bezier(0.19, 1, 0.22, 1)"
    ripple.style.zIndex = "9999"

    document.body.appendChild(ripple)

    setTimeout(() => {
      ripple.style.width = "300vw"
      ripple.style.height = "300vh"
      ripple.style.opacity = "0"
    }, 10)

    setTimeout(() => {
      ripple.remove()
    }, 800)
  }

  function animateElementsOnThemeChange(theme) {
    document.querySelectorAll("*").forEach((el) => {
      if (el.tagName !== "HTML" && el.tagName !== "SCRIPT" && el.tagName !== "STYLE") {
        el.classList.add("theme-transition")
        setTimeout(() => {
          el.classList.remove("theme-transition")
        }, 500)
      }
    })
  }

  if (els.logoTxtGrd && els.logoTxtLt.length) {
    const fontSize = window.getComputedStyle(els.logoTxtLt[0]).fontSize
    els.logoTxtGrd.style.fontSize = fontSize
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })

  const loadingBar = document.getElementById("loadingBar")
  let progress = 0
  const startTime = performance.now()
  const isSlowDevice = () => performance.now() - startTime > 300

  const loadingInterval = setInterval(
    () => {
      if (progress < 100) {
        const increment = isSlowDevice() ? 5 : 10
        progress += increment
        if (progress > 100) progress = 100
        requestAnimationFrame(() => {
          loadingBar.style.width = `${progress}%`
        })
        const loadingText = document.querySelector(".loading-text")
        if (progress < 30) {
          loadingText.textContent = "Loading resources..."
        } else if (progress < 60) {
          loadingText.textContent = "Preparing exploits..."
        } else if (progress < 90) {
          loadingText.textContent = "Almost ready..."
        } else {
          loadingText.textContent = "Welcome to voxlis.NET"
        }
      } else {
        clearInterval(loadingInterval)
        setTimeout(
          () => {
            els.loadingScreen.style.transition = "opacity 0.8s ease, visibility 0.8s ease"
            els.loadingScreen.style.opacity = "0"
            els.loadingScreen.style.visibility = "hidden"

            setTimeout(() => {
              els.loadingScreen.remove()
            }, 800)
          },
          isSlowDevice() ? 500 : 200,
        )
      }
    },
    isSlowDevice() ? 100 : 50,
  )
  if (els.lvlVal) els.lvlVal.textContent = "ALL"
  if (els.mLvlVal) els.mLvlVal.textContent = "ALL"
  updCnts()
  rndrExps()
  initStrs()
  stpEvts()
  crtUncMdl()
  setupPriceButtons()
})

function setupPriceButtons() {
  const priceButtons = document.querySelectorAll(".prc-btn-new")

  priceButtons.forEach((button) => {
    const originalHTML = button.innerHTML
    const isFree = button.classList.contains("free")
    let priceText = ""
    if (isFree) {
      priceText = "FREE"
    } else {
      const priceMatch = originalHTML.match(/\$[\d.]+/)
      if (priceMatch) {
        priceText = priceMatch[0]
        const periodMatch = originalHTML.match(/<span class="prc-prd">([^<]+)<\/span>/)
        if (periodMatch) {
          priceText += " " + periodMatch[1]
        }
      }
    }
    button.innerHTML = `
      <div class="default-text">
        <i class="fas fa-tag"></i> ${isFree ? "FREE" : "BUY"}
      </div>
      <div class="price-text">
        <i class="fas fa-tag"></i> ${priceText}
      </div>
    `
  })
}

function stpEvts() {
  window.addEventListener("scroll", () => {
    const heroH = els.hero ? els.hero.offsetHeight : 0
    if (window.scrollY > heroH / 2) {
      els.hdr.classList.add("scrolled")
    } else {
      els.hdr.classList.remove("scrolled")
    }
  })

  els.menuTgl.addEventListener("click", () => {
    els.menu.classList.toggle("hidden")
    els.menuTgl.innerHTML = els.menu.classList.contains("hidden")
      ? '<i class="fas fa-bars"></i>'
      : '<i class="fas fa-times"></i>'
  })

  els.srch.addEventListener("input", (e) => {
    st.qry = e.target.value
    els.mSrch.value = st.qry
    els.clrBtn.classList.toggle("hidden", !st.qry)
    els.mClrBtn.classList.toggle("hidden", !st.qry)
    fltrExps()
  })

  els.mSrch.addEventListener("input", (e) => {
    st.qry = e.target.value
    els.srch.value = st.qry
    els.clrBtn.classList.toggle("hidden", !st.qry)
    els.mClrBtn.classList.toggle("hidden", !st.qry)
    fltrExps()
  })

  els.clrBtn.addEventListener("click", () => {
    st.qry = ""
    els.srch.value = ""
    els.mSrch.value = ""
    els.clrBtn.classList.add("hidden")
    els.mClrBtn.classList.add("hidden")
    fltrExps()
  })

  els.mClrBtn.addEventListener("click", () => {
    st.qry = ""
    els.srch.value = ""
    els.mSrch.value = ""
    els.clrBtn.classList.add("hidden")
    els.mClrBtn.classList.add("hidden")
    fltrExps()
  })

  if (els.fltrBtn) {
    els.fltrBtn.addEventListener("click", () => {
      els.drwr.classList.add("open")
      document.body.style.overflow = "hidden"
    })
  }

  if (els.mFltrBtn) {
    els.mFltrBtn.addEventListener("click", () => {
      els.drwr.classList.add("open")
      document.body.style.overflow = "hidden"
      els.menu.classList.add("hidden")
      els.menuTgl.innerHTML = '<i class="fas fa-bars"></i>'
    })
  }

  if (els.drwr) {
    els.drwr.querySelector(".fltr-drwr-ovl").addEventListener("click", () => {
      els.drwr.classList.remove("open")
      document.body.style.overflow = ""
    })
  }

  if (els.applyBtn) {
    els.applyBtn.addEventListener("click", () => {
      els.drwr.classList.remove("open")
      document.body.style.overflow = ""
    })
  }

  if (els.lvlSldr) {
    els.lvlSldr.addEventListener("input", (e) => {
      const val = Number.parseInt(e.target.value)
      st.lvlFlt = [0, val]
      els.lvlVal.textContent = val === 0 ? "ALL" : val
      if (els.mLvlSldr) els.mLvlSldr.value = val
      if (els.mLvlVal) els.mLvlVal.textContent = val === 0 ? "ALL" : val
      updLvlSldr()
      updMLvlSldr()
      fltrExps()
    })
  }

  if (els.mLvlSldr) {
    els.mLvlSldr.addEventListener("input", (e) => {
      const val = Number.parseInt(e.target.value)
      st.lvlFlt = [0, val]
      els.mLvlVal.textContent = val === 0 ? "ALL" : val
      if (els.lvlSldr) els.lvlSldr.value = val
      if (els.lvlVal) els.lvlVal.textContent = val === 0 ? "ALL" : val
      updLvlSldr()
      updMLvlSldr()
      fltrExps()
    })
  }

  document.querySelectorAll(".cstm-chkbx input").forEach((cb) => {
    if (!cb.hasAttribute("data-pltf") && cb.id !== "vrfSwch" && cb.id !== "premSwch") return

    cb.addEventListener("change", () => {
      if (cb.hasAttribute("data-pltf")) {
        const pltf = cb.getAttribute("data-pltf")
        if (cb.checked) {
          if (!st.pltFlt.includes(pltf)) {
            st.pltFlt.push(pltf)
          }
        } else {
          st.pltFlt = st.pltFlt.filter((p) => p !== pltf)
        }
        document.querySelectorAll(`[data-pltf="${pltf}"]`).forEach((c) => {
          c.checked = cb.checked
        })
      }
      fltrExps()
    })
  })

  document.querySelectorAll(".mob-pltf-chkbx input").forEach((cb) => {
    cb.addEventListener("change", () => {
      const pltf = cb.getAttribute("data-pltf")
      if (cb.checked) {
        if (!st.pltFlt.includes(pltf)) {
          st.pltFlt.push(pltf)
        }
      } else {
        st.pltFlt = st.pltFlt.filter((p) => p !== pltf)
      }
      document.querySelectorAll(`[data-pltf="${pltf}"]`).forEach((c) => {
        c.checked = cb.checked
      })
      fltrExps()
    })
  })

  document.querySelectorAll(".prc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prc = btn.getAttribute("data-prc")
      st.prcFlt = prc
      document.querySelectorAll(".prc-btn, .mob-prc-btn").forEach((b) => {
        b.classList.remove("actv")
        if (b.getAttribute("data-prc") === prc) {
          b.classList.add("actv")
        }
      })
      fltrExps()
    })
  })

  document.querySelectorAll(".mob-prc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prc = btn.getAttribute("data-prc")
      st.prcFlt = prc
      document.querySelectorAll(".prc-btn, .mob-prc-btn").forEach((b) => {
        b.classList.remove("actv")
        if (b.getAttribute("data-prc") === prc) {
          b.classList.add("actv")
        }
      })
      fltrExps()
    })
  })

  if (els.vrfSwch) {
    els.vrfSwch.addEventListener("change", () => {
      st.vrfOnly = els.vrfSwch.checked
      if (els.mVrfSwch) els.mVrfSwch.checked = st.vrfOnly
      fltrExps()
    })
  }

  if (els.mVrfSwch) {
    els.mVrfSwch.addEventListener("change", () => {
      st.vrfOnly = els.mVrfSwch.checked
      if (els.vrfSwch) els.vrfSwch.checked = st.vrfOnly
      fltrExps()
    })
  }

  if (els.premSwch) {
    els.premSwch.addEventListener("change", () => {
      st.premOnly = els.premSwch.checked
      if (els.mPremSwch) els.mPremSwch.checked = st.premOnly
      fltrExps()
    })
  }

  if (els.mPremSwch) {
    els.mPremSwch.addEventListener("change", () => {
      st.premOnly = els.mPremSwch.checked
      if (els.premSwch) els.premSwch.checked = st.premOnly
      fltrExps()
    })
  }

  if (els.srtSel) {
    els.srtSel.addEventListener("change", () => {
      st.srtBy = els.srtSel.value
      if (els.mSrtSel) els.mSrtSel.value = st.srtBy
      fltrExps()
    })
  }

  if (els.mSrtSel) {
    els.mSrtSel.addEventListener("change", () => {
      st.srtBy = els.mSrtSel.value
      if (els.srtSel) els.srtSel.value = st.srtBy
      fltrExps()
    })
  }

  if (els.rstBtn) els.rstBtn.addEventListener("click", rstFltrs)
  if (els.mRstBtn) els.mRstBtn.addEventListener("click", rstFltrs)
  if (els.rstAllBtn) els.rstAllBtn.addEventListener("click", rstFltrs)

  if (els.tabBtns) {
    els.tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab")
        st.view = tab
        els.tabBtns.forEach((t) => t.classList.remove("actv"))
        btn.classList.add("actv")
        els.tabCntnt.forEach((cntnt) => cntnt.classList.remove("actv"))
        document.getElementById(`${tab}Tab`).classList.add("actv")
      })
    })
  }

  if (els.extSwch) {
    els.extSwch.addEventListener("change", () => {
      st.extOnly = els.extSwch.checked
      if (els.mExtSwch) els.mExtSwch.checked = st.extOnly
      fltrExps()
    })
  }

  if (els.mExtSwch) {
    els.mExtSwch.addEventListener("change", () => {
      st.extOnly = els.mExtSwch.checked
      if (els.extSwch) els.extSwch.checked = st.extOnly
      fltrExps()
    })
  }

  if (els.execSwch) {
    els.execSwch.addEventListener("change", () => {
      st.execOnly = els.execSwch.checked
      if (els.mExecSwch) els.mExecSwch.checked = st.execOnly
      fltrExps()
    })
  }

  if (els.mExecSwch) {
    els.mExecSwch.addEventListener("change", () => {
      st.execOnly = els.mExecSwch.checked
      if (els.execSwch) els.execSwch.checked = st.execOnly
      fltrExps()
    })
  }

  document.addEventListener("click", (e) => {
    const uncBtn = e.target.closest(".unc-btn")
    if (uncBtn) {
      const card = uncBtn.closest(".exp-crd") || uncBtn.closest(".exp-lst-itm")
      if (card) {
        const nameElement = card.querySelector(".crd-ttl") || card.querySelector(".lst-itm-ttl")
        if (nameElement) {
          const name = nameElement.textContent.trim().split(/\s+/)[0]
          const exploit = expData.find((exp) => exp.name === name)
          if (exploit) {
            opnUncMdl(exploit)
          }
        }
      }
    }
  })
}

function fltrExps() {
  st.fltrd = expData
    .filter((exp) => {
      if (st.qry) {
        const q = st.qry.toLowerCase()
        const nameMtch = exp.name.toLowerCase().includes(q)
        const descMtch = exp.desc.toLowerCase().includes(q)
        const pltfMtch = exp.plat && exp.plat.some((platform) => platform.toLowerCase().includes(q))
        const uncMtch =
          exp.pros && exp.pros.some((pro) => pro.toLowerCase().includes("unc") && pro.toLowerCase().includes(q))
        const uncNtrlMtch =
          exp.neutral &&
          exp.neutral.some((ntrl) => ntrl.toLowerCase().includes("unc") && ntrl.toLowerCase().includes(q))

        if (!(nameMtch || descMtch || pltfMtch || uncMtch || uncNtrlMtch)) {
          return false
        }
      }

      if (st.pltFlt.length > 0) {
        if (!st.pltFlt.some((pltf) => exp.plat.includes(pltf))) {
          return false
        }
      }

      if (st.lvlFlt[1] !== 0 && exp.lvl !== st.lvlFlt[1]) {
        return false
      }

      if (st.prcFlt !== "all") {
        if (st.prcFlt === "free" && exp.price !== "FREE") {
          return false
        }
        if (st.prcFlt === "paid" && exp.price === "FREE") {
          return false
        }
      }

      if (st.vrfOnly && !exp.verified) {
        return false
      }

      if (st.premOnly && !exp.premium) {
        return false
      }

      if (st.extOnly) {
        const isExternal =
          (exp.pros && exp.pros.some((pro) => pro.toLowerCase().includes("external"))) ||
          (exp.neutral && exp.neutral.some((ntrl) => ntrl.toLowerCase().includes("external")))

        if (!isExternal) {
          return false
        }
      }

      if (st.execOnly) {
        const isExecutor =
          !(exp.pros && exp.pros.some((pro) => pro.toLowerCase().includes("external"))) &&
          !(exp.neutral && exp.neutral.some((ntrl) => ntrl.toLowerCase().includes("external")))

        if (!isExecutor) {
          return false
        }
      }

      return true
    })
    .sort((a, b) => {
      switch (st.srtBy) {
        case "price-asc":
          const prcA = a.price === "FREE" ? 0 : Number.parseFloat(a.price.replace("$", ""))
          const prcB = b.price === "FREE" ? 0 : Number.parseFloat(b.price.replace("$", ""))
          return prcA - prcB
        case "price-desc":
          const prcC = a.price === "FREE" ? 0 : Number.parseFloat(a.price.replace("$", ""))
          const prcD = b.price === "FREE" ? 0 : Number.parseFloat(b.price.replace("$", ""))
          return prcD - prcC
        case "level-desc":
          return b.lvl - a.lvl
        case "name-asc":
          return a.name.localeCompare(b.name)
        default:
          if (a.verified && !b.verified) return -1
          if (!a.verified && b.verified) return 1
          if (a.premium && !b.premium) return -1
          if (!a.premium && b.premium) return 1
          return 0
      }
    })

  rndrExps()
  updCnts()
}

function rndrExps() {
  if (!els.grid || !els.list) return

  els.grid.innerHTML = ""
  els.list.innerHTML = ""

  if (st.fltrd.length === 0) {
    if (els.noRes) els.noRes.classList.remove("hidden")
  } else {
    if (els.noRes) els.noRes.classList.add("hidden")
  }

  st.fltrd.forEach((exp) => {
    const card = crtCrd(exp)
    els.grid.appendChild(card)
  })

  st.fltrd.forEach((exp) => {
    const listItem = crtLstItm(exp)
    els.list.appendChild(listItem)
  })
}

function crtCrd(exp) {
  const crd = document.createElement("div")
  crd.className = "exp-crd"
  if (exp.premium) crd.classList.add("prem")
  const acntClr = exp.premium ? "prem" : exp.accentColor
  crd.innerHTML = `
    <div class="crd-acnt ${acntClr}"></div>
    <div class="crd-hdr">
      <div class="crd-hdr-cntnt">
        <div class="crd-ttl-cntr">
          <h3 class="crd-ttl">
            ${exp.name}
            ${
              exp.verified
                ? `
              <span class="vrf-bdg">
                <i class="fas fa-check"></i>
                Verified
              </span>
            `
                : ""
            }
            ${
              exp.premium
                ? `
              <span class="prem-bdg">
                <i class="fas fa-crown"></i>
                Premium
              </span>
            `
                : ""
            }
          </h3>
          <p class="crd-desc">${exp.desc}</p>
        </div>
        <div class="pltf-bdgs">
          ${
            exp.plat.includes("windows")
              ? `
            <div class="pltf-bdg" title="Windows">
              <i class="fab fa-windows"></i>
            </div>
          `
              : ""
          }
          ${
            exp.plat.includes("macos")
              ? `
            <div class="pltf-bdg" title="macOS">
              <i class="fab fa-apple"></i>
            </div>
          `
              : ""
          }
          ${
            exp.plat.includes("android")
              ? `
            <div class="pltf-bdg" title="Android">
              <i class="fab fa-android"></i>
            </div>
          `
              : ""
          }
          ${
            exp.plat.includes("ios")
              ? `
            <div class="pltf-bdg" title="iOS">
              <i class="fab fa-apple"></i>
            </div>
          `
              : ""
          }
        </div>
      </div>
    </div>
    <div class="crd-bdy">
      <div class="crd-meta">
        <div class="lvl-bdg ${exp.txtColor}">Level ${exp.lvl}</div>
        <div class="meta-sep"></div>
        <div class="edr-info">Last edited by ${exp.editor}</div>
      </div>
      <div class="crd-cntnt cstm-scrlbr">
        ${
          exp.pros && exp.pros.length > 0
            ? `
          <div class="feat-sec pros">
            <h4 class="feat-hdng">
              <span class="feat-ico">+</span>
              Pros
            </h4>
            <ul class="feat-lst">
              ${exp.pros.map((pro) => `<li class="feat-itm">${pro}</li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }
        
        ${
          exp.neutral && exp.neutral.length > 0
            ? `
          <div class="feat-sec ntrl">
            <h4 class="feat-hdng">
              <span class="feat-ico">•</span>
              Neutral
            </h4>
            <ul class="feat-lst">
              ${exp.neutral.map((itm) => `<li class="feat-itm">${itm}</li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }
        
        ${
          exp.cons && exp.cons.length > 0
            ? `
          <div class="feat-sec cons">
            <h4 class="feat-hdng">
              <span class="feat-ico">-</span>
              Cons
            </h4>
            <ul class="feat-lst">
              ${exp.cons.map((con) => `<li class="feat-itm">${con}</li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }
      </div>
    </div>
    <div class="crd-ftr">
      <div class="btn-grid">
        <button class="crd-btn web-btn">
          Website <i class="fas fa-external-link-alt"></i>
        </button>
        <button class="crd-btn unc-btn">
          UNC <i class="fas fa-code"></i>
        </button>
      </div>
      <button class="crd-btn prc-btn-new ${exp.price === "FREE" ? "free" : ""}">
        <div class="default-text">
          <i class="fas fa-tag"></i> ${exp.price === "FREE" ? "FREE" : "BUY"}
        </div>
        <div class="price-text">
          <i class="fas fa-tag"></i> ${exp.price} ${exp.period ? `<span class="prc-prd">${exp.period}</span>` : ""}
        </div>
      </button>
    </div>
  `

  return crd
}
function crtLstItm(exp) {
  const itm = document.createElement("div")
  itm.className = "exp-lst-itm"
  if (exp.premium) itm.classList.add("prem")
  const acntClr = exp.premium ? "prem" : exp.accentColor
  let uncScore = "Unknown"
  for (const pro of exp.pros || []) {
    if (pro.includes("UNC") || pro.includes("sUNC")) {
      uncScore = pro.match(/\d+%/)[0] || "Unknown";
      break
    }
  }
  if (uncScore === "Unknown") {
    for (const neutral of exp.neutral || []) {
      if (neutral.includes("UNC") || neutral.includes("sUNC")) {
        uncScore = neutral.match(/\d+%/)[0]
        ; "Unknown"
        break
      }
    }
  }
  itm.innerHTML = `
    <div class="lst-itm-acnt ${acntClr}"></div>
    <div class="lst-itm-cntnt">
      <div class="lst-itm-hdr">
        <div class="lst-itm-main-info">
          <h3 class="lst-itm-ttl">${exp.name}</h3>
          <div class="lst-itm-badges">
            ${
              exp.verified
                ? `
              <span class="vrf-bdg">
                <i class="fas fa-check"></i>
                Verified
              </span>
            `
                : ""
            }
            ${
              exp.premium
                ? `
              <span class="prem-bdg">
                <i class="fas fa-crown"></i>
                Premium
              </span>
            `
                : ""
            }
          </div>
        </div>
        <div class="lst-itm-meta">
          <div class="lst-itm-lvl ${exp.txtColor}">Level ${exp.lvl}</div>
          <div class="lst-itm-unc-score">UNC: <span>${uncScore}</span></div>
        </div>
      </div>
      
      <div class="lst-itm-details">
        <div class="lst-itm-desc-container">
          <p class="lst-itm-desc">${exp.desc}</p>
          <div class="lst-itm-pltfs">
            ${exp.plat
              .map(
                (pltf) => `
              <div class="lst-itm-pltf" title="${pltf.charAt(0).toUpperCase() + pltf.slice(1)}">
                <i class="fab fa-${pltf === "ios" ? "apple" : pltf}"></i>
                <span>${pltf.charAt(0).toUpperCase() + pltf.slice(1)}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
        
        <div class="lst-itm-feats">
          ${
            exp.pros && exp.pros.length > 0
              ? `
            <div class="lst-itm-feat-sec pros">
              <h4 class="feat-hdng">
                <span class="feat-ico">+</span>
                Pros
              </h4>
              <ul class="lst-itm-feat-lst">
                ${exp.pros
                  .slice(0, 3)
                  .map((pro) => `<li class="lst-itm-feat-itm">${pro}</li>`)
                  .join("")}
                ${exp.pros.length > 3 ? `<li class="lst-itm-feat-more">+${exp.pros.length - 3} more</li>` : ""}
              </ul>
            </div>
          `
              : ""
          }
          
          ${
            exp.neutral && exp.neutral.length > 0
              ? `
            <div class="lst-itm-feat-sec ntrl">
              <h4 class="feat-hdng">
                <span class="feat-ico">•</span>
                Neutral
              </h4>
              <ul class="lst-itm-feat-lst">
                ${exp.neutral
                  .slice(0, 2)
                  .map((itm) => `<li class="lst-itm-feat-itm">${itm}</li>`)
                  .join("")}
                ${exp.neutral.length > 2 ? `<li class="lst-itm-feat-more">+${exp.neutral.length - 2} more</li>` : ""}
              </ul>
            </div>
          `
              : ""
          }
          
          ${
            exp.cons && exp.cons.length > 0
              ? `
            <div class="lst-itm-feat-sec cons">
              <h4 class="feat-hdng">
                <span class="feat-ico">-</span>
                Cons
              </h4>
              <ul class="lst-itm-feat-lst">
                ${exp.cons
                  .slice(0, 2)
                  .map((con) => `<li class="lst-itm-feat-itm">${con}</li>`)
                  .join("")}
                ${exp.cons.length > 2 ? `<li class="lst-itm-feat-more">+${exp.cons.length - 2} more</li>` : ""}
              </ul>
            </div>
          `
              : ""
          }
        </div>
      </div>
      
      <div class="lst-itm-footer">
        <div class="lst-itm-edr">Edited by ${exp.editor}</div>
      </div>
    </div>
    <div class="lst-itm-acts">
      <div class="lst-itm-price ${exp.price === "FREE" ? "free" : ""}">
        <i class="fas fa-tag"></i>
        <span class="lst-itm-price-value">${exp.price}</span>
        ${exp.period ? `<span class="lst-itm-price-period">${exp.period}</span>` : ""}
      </div>
      <div class="lst-itm-btns">
        <button class="lst-itm-btn web-btn">
          <i class="fas fa-external-link-alt"></i>
          <span>Website</span>
        </button>
        <button class="lst-itm-btn unc-btn">
          <i class="fas fa-code"></i>
          <span>UNC</span>
        </button>
      </div>
    </div>
  `

  return itm
}

function updCnts() {
  if (!els.fltCnt || !els.ttlCnt) return;
  const currentFilteredCount = parseInt(els.fltCnt.textContent) || 0;
  const newFilteredCount = st.fltrd.length;
  const totalCount = expData.length;
  els.ttlCnt.textContent = totalCount;
  if (currentFilteredCount !== newFilteredCount) {
    animateCountChange(els.fltCnt, currentFilteredCount, newFilteredCount);
  }
}

function animateCountChange(element, startValue, endValue) {
  if (element.countAnimation) {
    cancelAnimationFrame(element.countAnimation);
  }
  const duration = 1000;
  const startTime = performance.now();
  const difference = endValue - startValue;
  function updateCount(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    let currentValue;
    if (difference > 0) {
      currentValue = Math.floor(startValue + difference * easeOutQuart);
    } else {
      currentValue = Math.ceil(startValue + difference * easeOutQuart);
    }
    element.textContent = currentValue;
    if (progress < 1) {
      element.countAnimation = requestAnimationFrame(updateCount);
    } else {
      element.textContent = endValue;
    }
  }
  element.countAnimation = requestAnimationFrame(updateCount);
}

function updLvlSldr() {
  if (!els.lvlFill) return
  const pct = (st.lvlFlt[1] / 8) * 100
  els.lvlFill.style.width = `${pct}%`

  document.querySelectorAll(".lvl-mrkr").forEach((mrkr, idx) => {
    if (st.lvlFlt[1] === 0) {
      mrkr.classList.add("actv")
    } else {
      mrkr.classList.toggle("actv", idx <= st.lvlFlt[1])
    }
  })
}

function updMLvlSldr() {
  if (!els.mLvlFill) return
  const pct = (st.lvlFlt[1] / 8) * 100
  els.mLvlFill.style.width = `${pct}%`

  document.querySelectorAll("#fltrDrwr .lvl-mrkr").forEach((mrkr, idx) => {
    if (st.lvlFlt[1] === 0) {
      mrkr.classList.add("actv")
    } else {
      mrkr.classList.toggle("actv", idx <= st.lvlFlt[1])
    }
  })
}

function rstFltrs() {
  st.qry = ""
  els.srch.value = ""
  els.mSrch.value = ""
  els.clrBtn.classList.add("hidden")
  els.mClrBtn.classList.add("hidden")

  st.lvlFlt = [0, 0]
  if (els.lvlSldr) els.lvlSldr.value = 0
  if (els.mLvlSldr) els.mLvlSldr.value = 0
  if (els.lvlVal) els.lvlVal.textContent = "ALL"
  if (els.mLvlVal) els.mLvlVal.textContent = "ALL"
  updLvlSldr()
  updMLvlSldr()

  st.pltFlt = []
  document.querySelectorAll(".cstm-chkbx input, .mob-pltf-chkbx input").forEach((cb) => {
    cb.checked = false
  })

  st.prcFlt = "all"
  document.querySelectorAll(".prc-btn, .mob-prc-btn").forEach((btn) => {
    btn.classList.remove("actv")
    if (btn.getAttribute("data-prc") === "all") {
      btn.classList.add("actv")
    }
  })

  st.vrfOnly = false
  if (els.vrfSwch) els.vrfSwch.checked = false
  if (els.mVrfSwch) els.mVrfSwch.checked = false

  st.premOnly = false
  if (els.premSwch) els.premSwch.checked = false
  if (els.mPremSwch) els.mPremSwch.checked = false

  st.extOnly = false
  if (els.extSwch) els.extSwch.checked = false
  if (els.mExtSwch) els.mExtSwch.checked = false

  st.execOnly = false
  if (els.execSwch) els.execSwch.checked = false
  if (els.mExecSwch) els.mExecSwch.checked = false

  st.srtBy = "recommended"
  if (els.srtSel) els.srtSel.value = "recommended"
  if (els.mSrtSel) els.mSrtSel.value = "recommended"

  fltrExps()
}

function initStrs() {
  if (!els.cnv) return
  const ctx = els.cnv.getContext("2d")
  if (!ctx) return

  let strs = []

  class Str {
    constructor() {
      this.rst()
    }

    rst() {
      this.x = Math.random() * els.cnv.width
      this.y = Math.random() * els.cnv.height
      this.z = Math.random() * 2
      this.size = Math.random() * 2
      this.opacity = Math.random() * 0.5 + 0.5
      this.speed = Math.random() * 0.5 + 0.5
      this.angle = Math.random() * Math.PI * 2
    }

    upd() {
      this.angle += 0.001 * this.speed
      this.x += Math.cos(this.angle) * 0.1
      this.y += Math.sin(this.angle) * 0.1
      this.opacity += Math.sin(Date.now() * 0.001 * this.speed) * 0.02
      this.opacity = Math.max(0.3, Math.min(1, this.opacity))
      if (this.x < 0 || this.x > els.cnv.width || this.x > els.cnv.width || this.y < 0 || this.y > els.cnv.height) {
        this.rst()
      }
    }

    drw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const crtStrs = () => {
    strs = Array.from({ length: 100 }, () => new Str())
  }

  const rszCnv = () => {
    els.cnv.width = window.innerWidth
    els.cnv.height = window.innerHeight
    crtStrs()
  }

  const anmt = () => {
    ctx.clearRect(0, 0, els.cnv.width, els.cnv.height)
    strs.forEach((str) => {
      str.upd()
      str.drw()
    })
    requestAnimationFrame(anmt)
  }

  rszCnv()
  anmt()
  window.addEventListener("resize", rszCnv)
}

window.addEventListener("resize", adjSrchBar)
window.addEventListener("load", adjSrchBar)

function adjSrchBar() {
  const srchCont = document.querySelector(".hdr-ctr")
  const hdrCont = document.querySelector(".hdr-cntr")
  const fltrBtn = document.getElementById("fltrBtn")
  const logoSec = document.querySelector(".hdr-lft")
  const srchInp = document.querySelector(".srch-inp")
  const srchIco = document.querySelector(".srch-ico")
  const clrBtn = document.querySelector(".clr-srch-btn")

  if (!srchCont || !hdrCont || !fltrBtn || !logoSec || !srchInp || !srchIco) return

  const windowWidth = window.innerWidth

  if (windowWidth <= 768) {
    srchCont.style.display = "none"
    return
  }

  srchCont.style.display = "block"
  srchCont.style.position = "absolute"
  srchCont.style.left = "50%"
  srchCont.style.transform = "translateX(-50%)"
  srchCont.style.maxWidth = "400px"
  srchCont.style.width = "auto"
  srchCont.style.zIndex = "5"
}
