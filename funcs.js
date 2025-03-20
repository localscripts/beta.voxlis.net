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
  srtSel: document.getElementById("srtSel"),
  mSrtSel: document.getElementById("mobSrtSel"),
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
  popup: document.getElementById("popupNotification"),
  closePopup: document.getElementById("closePopup"),
  cnv: document.getElementById("strCnv")
}

const st = {
  view: "grid",
  qry: "",
  pltFlt: [],
  lvlFlt: [0, 0],
  prcFlt: "all",
  vrfOnly: false,
  srtBy: "recommended",
  fltrd: [...expData]
}

document.addEventListener("DOMContentLoaded", () => {
  els.lvlVal.textContent = "ALL"
  els.mLvlVal.textContent = "ALL"

  updCnts()
  rndrExps()
  initStrs()
  setupEvts()
})

function setupEvts() {
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
    els.clrBtn.classList.toggle("hidden", !st.qry)
    fltrExps()
  })

  els.mSrch.addEventListener("input", (e) => {
    st.qry = e.target.value
    els.srch.value = st.qry
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

  els.fltrBtn.addEventListener("click", () => {
    els.drwr.classList.add("open")
    document.body.style.overflow = "hidden"
  })

  els.mFltrBtn.addEventListener("click", () => {
    els.drwr.classList.add("open")
    document.body.style.overflow = "hidden"
    els.menu.classList.add("hidden")
    els.menuTgl.innerHTML = '<i class="fas fa-bars"></i>'
  })

  els.drwr.querySelector(".fltr-drwr-ovl").addEventListener("click", () => {
    els.drwr.classList.remove("open")
    document.body.style.overflow = ""
  })

  els.applyBtn.addEventListener("click", () => {
    els.drwr.classList.remove("open")
    document.body.style.overflow = ""
  })

  els.lvlSldr.addEventListener("input", (e) => {
    const val = parseInt(e.target.value)
    st.lvlFlt = [0, val]
    els.lvlVal.textContent = val === 0 ? "ALL" : val
    updLvlSldr()
    fltrExps()
  })

  els.mLvlSldr.addEventListener("input", (e) => {
    const val = parseInt(e.target.value)
    st.lvlFlt = [0, val]
    els.mLvlVal.textContent = val === 0 ? "ALL" : val
    els.lvlSldr.value = val
    els.lvlVal.textContent = val === 0 ? "ALL" : val
    updLvlSldr()
    updMLvlSldr()
    fltrExps()
  })

  document.querySelectorAll(".cstm-chkbx input").forEach((cb) => {
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
      document.querySelectorAll(".prc-btn").forEach((b) => {
        b.classList.remove("actv")
      })
      document.querySelectorAll(`[data-prc="${prc}"]`).forEach((b) => {
        b.classList.add("actv")
      })
      fltrExps()
    })
  })

  document.querySelectorAll(".mob-prc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prc = btn.getAttribute("data-prc")
      st.prcFlt = prc
      document.querySelectorAll(".mob-prc-btn").forEach((b) => {
        b.classList.remove("actv")
      })
      document.querySelectorAll(`[data-prc="${prc}"]`).forEach((b) => {
        b.classList.add("actv")
      })

      fltrExps()
    })
  })

  els.vrfSwch.addEventListener("change", () => {
    st.vrfOnly = els.vrfSwch.checked
    els.mVrfSwch.checked = st.vrfOnly
    fltrExps()
  })

  els.mVrfSwch.addEventListener("change", () => {
    st.vrfOnly = els.mVrfSwch.checked
    els.vrfSwch.checked = st.vrfOnly
    fltrExps()
  })

  els.srtSel.addEventListener("change", () => {
    st.srtBy = els.srtSel.value
    els.mSrtSel.value = st.srtBy
    fltrExps()
  })

  els.mSrtSel.addEventListener("change", () => {
    st.srtBy = els.mSrtSel.value
    els.srtSel.value = st.srtBy
    fltrExps()
  })

  els.rstBtn.addEventListener("click", rstFltrs)
  els.mRstBtn.addEventListener("click", rstFltrs)
  els.rstAllBtn.addEventListener("click", rstFltrs)
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

  if (els.closePopup) {
    els.closePopup.addEventListener("click", () => {
      if (els.popup) {
        els.popup.style.display = "none"
      }
    })
  }
}

function fltrExps() {
  st.fltrd = expData
    .filter((exp) => {
      if (st.qry) {
        const q = st.qry.toLowerCase()
        const nameMtch = exp.name.toLowerCase().includes(q)
        const descMtch = exp.desc.toLowerCase().includes(q)
        const prosMtch = exp.pros && exp.pros.some((pro) => pro.toLowerCase().includes(q))
        const consMtch = exp.cons && exp.cons.some((con) => con.toLowerCase().includes(q))
        const ntrlMtch = exp.neutral && exp.neutral.some((ntrl) => ntrl.toLowerCase().includes(q))

        if (!(nameMtch || descMtch || prosMtch || consMtch || ntrlMtch)) {
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

      return true
    })
    .sort((a, b) => {
      switch (st.srtBy) {
        case "price-asc":
          const prcA = a.price === "FREE" ? 0 : parseFloat(a.price.replace("$", ""))
          const prcB = b.price === "FREE" ? 0 : parseFloat(b.price.replace("$", ""))
          return prcA - prcB
        case "price-desc":
          const prcC = a.price === "FREE" ? 0 : parseFloat(a.price.replace("$", ""))
          const prcD = b.price === "FREE" ? 0 : parseFloat(b.price.replace("$", ""))
          return prcD - prcC
        case "level-desc":
          return b.lvl - a.lvl
        case "name-asc":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  rndrExps()
  updCnts()
}

function rndrExps() {
  els.grid.innerHTML = ""
  els.list.innerHTML = ""

  if (st.fltrd.length === 0) {
    els.noRes.classList.remove("hidden")
  } else {
    els.noRes.classList.add("hidden")
  }

  st.fltrd.forEach((exp) => {
    els.grid.appendChild(crtCrd(exp))
  })

  st.fltrd.forEach((exp) => {
    els.list.appendChild(crtLstItm(exp))
  })
}

function crtCrd(exp) {
  const crd = document.createElement("div")
  crd.className = "exp-crd"

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
        <button class="crd-btn unc-btn">UNC</button>
      </div>
      <div class="prc-lbl ${exp.price === "FREE" ? "free" : ""}">
        ${exp.price} ${exp.period ? `<span class="prc-prd">${exp.period}</span>` : ""}
      </div>
    </div>
  `

  return crd
}

function crtLstItm(exp) {
  const itm = document.createElement("div")
  itm.className = "exp-lst-itm"
  const acntClr = exp.premium ? "prem" : exp.accentColor
  itm.innerHTML = `
    <div class="lst-itm-acnt ${acntClr}"></div>
    <div class="lst-itm-cntnt">
      <div class="lst-itm-hdr">
        <h3 class="lst-itm-ttl">${exp.name}</h3>
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
        <div class="lst-itm-lvl ${exp.txtColor}">Level ${exp.lvl}</div>
      </div>
      <p class="lst-itm-desc">${exp.desc}</p>
      <div class="lst-itm-pltfs">
        ${exp.plat
          .slice(0, 3)
          .map(
            (pltf) => `
          <div class="lst-itm-pltf">${pltf.charAt(0).toUpperCase() + pltf.slice(1)}</div>
        `,
          )
          .join("")}
        ${
          exp.plat.length > 3
            ? `
          <div class="lst-itm-pltf">+${exp.plat.length - 3} more</div>
        `
            : ""
        }
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
                .slice(0, 2)
                .map((pro) => `<li class="lst-itm-feat-itm">${pro}</li>`)
                .join("")}
              ${exp.pros.length > 2 ? `<li class="lst-itm-feat-more">+${exp.pros.length - 2} more</li>` : ""}
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
    <div class="lst-itm-acts">
      <div class="lst-itm-btns">
        <button class="lst-itm-btn web-btn">
          Website <i class="fas fa-external-link-alt"></i>
        </button>
        <button class="lst-itm-btn unc-btn">UNC</button>
      </div>
      <div class="prc-lbl ${exp.price === "FREE" ? "free" : ""}">
        ${exp.price}
        ${exp.period ? `<span class="prc-prd">${exp.period}</span>` : ""}
      </div>
      <div class="lst-itm-edr">Edited by ${exp.editor}</div>
    </div>
  `
  return itm
}

function updCnts() {
  els.fltCnt.textContent = st.fltrd.length
  els.ttlCnt.textContent = expData.length
}

function updLvlSldr() {
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
  els.lvlSldr.value = 0
  els.mLvlSldr.value = 0
  els.lvlVal.textContent = "ALL"
  els.mLvlVal.textContent = "ALL"
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
  els.vrfSwch.checked = false
  els.mVrfSwch.checked = false

  st.srtBy = "recommended"
  els.srtSel.value = "recommended"
  els.mSrtSel.value = "recommended"

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
      if (this.x < 0 || this.x > els.cnv.width || this.y < 0 || this.y > els.cnv.height) {
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