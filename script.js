const experiences = [
  {
    title: "Desenvolvimento web",
    type: "web",
    period: "Experiência prática",
    description:
      "Criação de páginas responsivas, interfaces de apresentação, formulários e estruturas publicáveis na web.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Organização de processos",
    type: "processos",
    period: "Experiência prática",
    description:
      "Estruturação de fluxos de trabalho, acompanhamento de demandas, cadastros e rotinas operacionais.",
    tags: ["Processos", "Operação", "Gestão"],
  },
  {
    title: "Gestão comercial",
    type: "processos",
    period: "Experiência prática",
    description:
      "Organização de informações de clientes, funil de vendas, indicadores e documentação de regras de negócio.",
    tags: ["Vendas", "CRM", "Indicadores"],
  },
  {
    title: "Automação de rotinas",
    type: "automacao",
    period: "Experiência prática",
    description:
      "Apoio na revisão de arquivos, relatórios, diagnósticos, listas e tarefas repetitivas com scripts.",
    tags: ["Automação", "CSV", "Relatórios"],
  },
  {
    title: "Publicação e versionamento",
    type: "web",
    period: "Experiência prática",
    description:
      "Uso de Git, GitHub, documentação de projetos e publicação de páginas para acesso online.",
    tags: ["Git", "GitHub", "Documentação"],
  },
];

const experienceGrid = document.querySelector("#experienceGrid");
const filterButtons = document.querySelectorAll(".filter");

function renderExperiences(type = "todos") {
  const visibleExperiences =
    type === "todos"
      ? experiences
      : experiences.filter((experience) => experience.type === type);

  experienceGrid.innerHTML = visibleExperiences
    .map(
      (experience) => `
        <article class="experience-card">
          <div>
            <div class="experience-card__meta">
              <span>${experience.type}</span>
              <span>${experience.period}</span>
            </div>
            <h3>${experience.title}</h3>
            <p>${experience.description}</p>
            <div class="experience-card__tags">
              ${experience.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderExperiences(button.dataset.filter);
  });
});

renderExperiences();
