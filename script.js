/**
 * AORUBRO - Landing Page de Tráfego Pago (Versão Condensada)
 * Motor Comercial: Configurador de Planos, Addons Interativos, Simulador e Formulário
 */

// ==========================================
// 1. CONFIGURADOR DE PLANOS & ADDONS INTERATIVOS
// ==========================================
let selectedPlan = "combo";
let addonAV = false;
let addonSocial = false;

const plansData = {
  meta: {
    name: "Meta Ads (Instagram & Facebook)",
    shortName: "Meta Ads",
    recurring: 390,
    onetime: 590,
    setupNote: "Taxa de Setup Inicial: 590€ (Pixel + CAPI + Públicos)"
  },
  combo: {
    name: "Combo Multicanal (Meta + Google)",
    shortName: "Combo Multicanal",
    recurring: 500,
    onetime: 990,
    setupNote: "Setup Bonificado: 990€ (Fracionável em 2× 495€)"
  },
  google: {
    name: "Google Ads (Rede de Pesquisa)",
    shortName: "Google Ads",
    recurring: 290,
    onetime: 890,
    setupNote: "Taxa de Setup Inicial Google: 890€ (Enhanced Conversions + GTM)"
  }
};

function chooseBasePlan(planKey) {
  selectedPlan = planKey;
  updatePricingConfigurator();
}

function toggleAddon(addonKey) {
  if (addonKey === "av") {
    const chk = document.getElementById("addon-chk-av");
    addonAV = chk ? chk.checked : !addonAV;
  } else if (addonKey === "social") {
    const chk = document.getElementById("addon-chk-social");
    addonSocial = chk ? chk.checked : !addonSocial;
  }
  updatePricingConfigurator();
}

function updatePricingConfigurator() {
  const plan = plansData[selectedPlan] || plansData.combo;

  // Atualiza visual dos 3 cartões de planos
  ["meta", "combo", "google"].forEach(key => {
    const card = document.getElementById(`card-plan-${key}`);
    const checkBadge = document.getElementById(`check-badge-${key}`);
    const btn = document.getElementById(`btn-select-${key}`);
    const isSelected = (key === selectedPlan);

    if (card) {
      card.classList.toggle("active-selected-plan", isSelected);
    }
    if (checkBadge) {
      checkBadge.textContent = isSelected ? "✓ Plano Selecionado" : "Selecionar Plano";
      checkBadge.classList.toggle("active", isSelected);
    }
    if (btn) {
      if (key === "combo") {
        btn.textContent = isSelected ? "✓ COMBO MULTICANAL SELECIONADO" : "QUERO O COMBO MULTICANAL →";
      } else {
        btn.textContent = isSelected ? `✓ ${plansData[key].shortName} Selecionado` : `Escolher ${plansData[key].shortName} →`;
      }
    }
  });

  // Atualiza estado dos Addons
  const chkAV = document.getElementById("addon-chk-av");
  const cardAV = document.getElementById("addon-card-av");
  if (chkAV) chkAV.checked = addonAV;
  if (cardAV) cardAV.classList.toggle("selected", addonAV);

  const chkSocial = document.getElementById("addon-chk-social");
  const cardSocial = document.getElementById("addon-card-social");
  if (chkSocial) chkSocial.checked = addonSocial;
  if (cardSocial) cardSocial.classList.toggle("selected", addonSocial);

  // Calcula os totais recorrente e one-time
  let totalRecurring = plan.recurring;
  let totalOnetime = plan.onetime;

  if (addonSocial) totalRecurring += 490;
  if (addonAV) totalOnetime += 890;

  // Atualiza números no Resumo
  const recEl = document.getElementById("sum-recurring-val");
  const oneEl = document.getElementById("sum-onetime-val");
  const planPill = document.getElementById("summary-active-plan-pill");
  const breakdownEl = document.getElementById("summary-items-breakdown");

  if (recEl) recEl.textContent = `${totalRecurring.toLocaleString("pt-PT")}€`;
  if (oneEl) oneEl.textContent = `${totalOnetime.toLocaleString("pt-PT")}€`;
  if (planPill) planPill.innerHTML = `Plano Ativo: <strong>${plan.name}</strong>`;

  // Monta a lista detalhada do resumo
  if (breakdownEl) {
    let itemsHtml = `
      <div class="breakdown-row plan-row">
        <div class="row-left">
          <span class="row-tag plan">PLANO</span>
          <span class="row-name">${plan.name}</span>
        </div>
        <div class="row-right">
          <span class="rec-part">${plan.recurring}€/mês</span>
          <span class="plus-sep">+</span>
          <span class="one-part">${plan.onetime}€ setup</span>
        </div>
      </div>
    `;

    if (addonAV) {
      itemsHtml += `
        <div class="breakdown-row addon-row">
          <div class="row-left">
            <span class="row-tag onetime">ADDON</span>
            <span class="row-name">Captação Audiovisual Presencial (Algarve)</span>
          </div>
          <div class="row-right">
            <span class="one-part">+890€ taxa única</span>
          </div>
        </div>
      `;
    }

    if (addonSocial) {
      itemsHtml += `
        <div class="breakdown-row addon-row">
          <div class="row-left">
            <span class="row-tag recurring">ADDON</span>
            <span class="row-name">Gestão Orgânica de Redes Sociais</span>
          </div>
          <div class="row-right">
            <span class="rec-part">+490€ / mês</span>
          </div>
        </div>
      `;
    }

    if (!addonAV && !addonSocial) {
      itemsHtml += `
        <div class="breakdown-row empty-row">
          <span class="empty-text">💡 Dica: Pode assinalar a Captação Audiovisual ou Gestão Orgânica acima para somar à proposta.</span>
        </div>
      `;
    }

    breakdownEl.innerHTML = itemsHtml;
  }

  // Sincroniza com o formulário
  const selectEl = document.getElementById("c-channel");
  if (selectEl) {
    selectEl.value = selectedPlan;
  }
}

function confirmInvestmentSelection() {
  const contactSection = document.getElementById("contacto");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function selectPlanAndScroll(planType) {
  chooseBasePlan(planType);
  confirmInvestmentSelection();
}

// ==========================================
// 2. SIMULADOR RÁPIDO DE CONTACTOS
// ==========================================
let simpleSector = "services";
const sectorRates = {
  services: { minCpl: 6, maxCpl: 12, channels: "Meta + Google" },
  realestate: { minCpl: 12, maxCpl: 28, channels: "Meta + Google" },
  retail: { minCpl: 4, maxCpl: 9, channels: "Meta Ads" }
};

function setSimpleSector(sector) {
  simpleSector = sector;
  document.querySelectorAll(".sector-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sector === sector);
  });
  const slider = document.getElementById("condensed-spend-slider");
  updateSimpleSimulator(slider ? slider.value : 600);
}

function updateSimpleSimulator(val) {
  const spend = parseInt(val, 10);
  const displayEl = document.getElementById("condensed-spend-display");
  if (displayEl) displayEl.textContent = `${spend.toLocaleString("pt-PT")} € / mês`;

  const rate = sectorRates[simpleSector] || sectorRates.services;
  const minLeads = Math.max(12, Math.round(spend / rate.maxCpl));
  const maxLeads = Math.max(minLeads + 10, Math.round(spend / rate.minCpl));

  const leadsOutput = document.getElementById("condensed-leads-output");
  const cplOutput = document.getElementById("condensed-cpl-output");
  const channelsOutput = document.getElementById("condensed-channels-output");

  if (leadsOutput) leadsOutput.textContent = `${minLeads} - ${maxLeads}`;
  if (cplOutput) cplOutput.textContent = `${rate.minCpl}€ - ${rate.maxCpl}€`;
  if (channelsOutput) channelsOutput.textContent = rate.channels;
}

function syncSimToForm() {
  confirmInvestmentSelection();
}

// ==========================================
// 3. ENVIO DO FORMULÁRIO COM SELEÇÃO COMPLETA
// ==========================================
function handleCondensedFormSubmit(e) {
  e.preventDefault();
  const statusEl = document.getElementById("c-form-status");
  const name = document.getElementById("c-name").value.trim();
  const phone = document.getElementById("c-phone").value.trim();
  const company = document.getElementById("c-company").value.trim();
  const channel = document.getElementById("c-channel").value;
  const sliderVal = document.getElementById("condensed-spend-slider").value;

  const plan = plansData[selectedPlan] || plansData.combo;
  let totalRecurring = plan.recurring + (addonSocial ? 490 : 0);
  let totalOnetime = plan.onetime + (addonAV ? 890 : 0);

  let addonsTextList = [];
  if (addonAV) addonsTextList.push("Captação Audiovisual Presencial (890€ única)");
  if (addonSocial) addonsTextList.push("Gestão Orgânica de Redes (490€/mês)");
  const addonsStr = addonsTextList.length > 0 ? ` + Addons: ${addonsTextList.join(", ")}` : " (sem addons adicionais)";

  if (statusEl) {
    statusEl.style.display = "block";
    statusEl.className = "form-status-message success";
    statusEl.innerHTML = `<strong>Obrigado, ${name}!</strong> A sua proposta foi configurada com sucesso.<br />Estamos a abrir o WhatsApp oficial com o resumo selecionado (${plan.shortName} • ${totalRecurring}€/mês recorrente + ${totalOnetime}€ taxa única).`;
  }

  // Prepara mensagem WhatsApp completa com a configuração do utilizador
  const whatsappMsg = `Olá AORUBRO! Chamo-me ${name} (da empresa ${company}). Configurei a minha proposta na página:\n- Plano: ${plan.name}\n- Addons: ${addonsStr}\n- Investimento Recorrente: ${totalRecurring}€/mês\n- Taxa Única (Setup): ${totalOnetime}€\n- Orçamento estimado para anúncios: cerca de ${sliderVal}€/mês.\n\nGostaria de agendar a reunião estratégica de 20 minutos.`;
  const whatsappUrl = `https://wa.me/351911100707?text=${encodeURIComponent(whatsappMsg)}`;

  setTimeout(() => {
    window.open(whatsappUrl, "_blank");
  }, 1200);
}

// ==========================================
// 4. SUPORTE TOTAL PARA FAQs ACCORDION & INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar configurador
  updatePricingConfigurator();

  // Garantir funcionamento suave das FAQs
  const faqItems = document.querySelectorAll(".condensed-faq-list .faq-item");
  faqItems.forEach(item => {
    const summary = item.querySelector("summary");
    if (summary) {
      summary.addEventListener("click", () => {
        const isCurrentlyOpen = item.hasAttribute("open");
        if (!isCurrentlyOpen) {
          faqItems.forEach(other => {
            if (other !== item) other.removeAttribute("open");
          });
        }
      });
    }
  });
});
