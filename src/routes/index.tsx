import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  Boxes,
  Building2,
  Calendar,
  Compass,
  FlaskConical,
  Globe,
  Layers,
  Quote,
  Rocket,
  Scissors,
  Search,
  Shirt,
  Sparkles,
  TrendingUp,
  Users,
  UtensilsCrossed,
} from "lucide-react";


import logoAsset from "@/assets/perplexity-logo.png.asset.json";
import heroAsset from "@/assets/perplexity-hero.png.asset.json";
import prompt1 from "@/assets/prompt-1.jpg";
import prompt2 from "@/assets/prompt-2.jpg";
import prompt3 from "@/assets/prompt-3.jpg";
import founder1 from "@/assets/founder-5.png.asset.json";
import founder2 from "@/assets/founder-6.png.asset.json";
import founder3 from "@/assets/founder-7.png.asset.json";
import founder4 from "@/assets/founder-8.png.asset.json";
import { Editable, Reveal, ScreenshotSlot, Slide } from "@/components/deck";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perplexity AI | IA aplicada a pequenos negócios" },
      {
        name: "description",
        content:
          "Apresentação sobre a Perplexity AI: como o motor de respostas pesquisa, cita fontes e apoia decisões de pequenos negócios locais.",
      },
      { property: "og:title", content: "Perplexity AI | IA aplicada a pequenos negócios" },
      {
        property: "og:description",
        content:
          "Slide deck em português sobre a Perplexity AI e casos de uso em alimentação, moda e beleza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Search,
    name: "Pro Search",
    text: "Busca guiada em várias etapas: refina a pergunta, consulta múltiplas fontes e entrega uma resposta com citações.",
  },
  {
    icon: FlaskConical,
    name: "Deep Research",
    text: "Executa dezenas de buscas encadeadas e devolve um relatório longo, estruturado e referenciado.",
  },
  {
    icon: Layers,
    name: "Spaces",
    text: "Espaços de trabalho com arquivos e instruções fixas, para pesquisar sempre dentro do seu contexto.",
  },
  {
    icon: Users,
    name: "Model Council",
    text: "Compara respostas de modelos diferentes na mesma pergunta, evidenciando divergências antes da decisão.",
  },
  {
    icon: Compass,
    name: "Comet",
    text: "Navegador com IA integrada: resume a página aberta e responde sem interromper o seu fluxo.",
  },
];

const founders = [
  {
    name: "Aravind Srinivas",
    role: "Cofundador e CEO",
    photo: founder1.url,
    text: "Doutor em ciência da computação por Berkeley e ex-pesquisador da OpenAI, DeepMind e Google. É a voz pública da empresa e define o rumo do produto.",
  },
  {
    name: "Denis Yarats",
    role: "Cofundador e CTO",
    photo: founder2.url,
    text: "Ex-pesquisador de inteligência artificial da Meta (FAIR). Lidera a engenharia e a arquitetura do motor de busca e resposta.",
  },
  {
    name: "Johnny Ho",
    role: "Cofundador e Chief Strategy Officer",
    photo: founder3.url,
    text: "Ex-engenheiro do Quora e medalhista em competições de programação. Cuida da estratégia e do crescimento do produto.",
  },
  {
    name: "Andy Konwinski",
    role: "Cofundador",
    photo: founder4.url,
    text: "Cofundador da Databricks e pesquisador ligado a Berkeley. Traz a experiência de construir empresas de dados em larga escala.",
  },
];

const niches = [
  {
    icon: UtensilsCrossed,
    name: "Alimentação",
    scope: "Padaria · Cafeteria · Hamburgueria",
    problem:
      "O cardápio é definido por intuição e o preço é copiado do vizinho, sem saber o que o público da região realmente procura.",
    help: "Levanta tendências de cardápio da estação, compara faixas de preço praticadas na cidade e sugere combos com margem, sempre com o link da fonte para conferência.",
  },
  {
    icon: Shirt,
    name: "Moda e vestuário",
    scope: "Loja de bairro · Brechó · Marca autoral",
    problem:
      "A compra de coleção acontece no escuro: difícil saber quais peças, cores e modelagens vão girar na próxima estação.",
    help: "Resume tendências de estação a partir de portais de moda, analisa o posicionamento e a comunicação de concorrentes diretos e transforma isso em uma lista de prioridades de compra.",
  },
  {
    icon: Scissors,
    name: "Serviços de beleza",
    scope: "Salão · Barbearia · Studio de unhas",
    problem:
      "As redes sociais ficam paradas por falta de tempo e de ideias, e o agendamento depende só do boca a boca.",
    help: "Gera um plano de conteúdo mensal com temas, formatos e legendas por semana, apoiado em buscas sobre o que gera engajamento no setor.",
  },
];

function Index() {
  return (
    <main className="relative w-full bg-background">
      {/* 1. Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-16 lg:px-24">
        <div className="mesh-bg pointer-events-none absolute inset-0" />
        <div className="dots-bg pointer-events-none absolute inset-0 opacity-60" />
        <img
          src={heroAsset.url}
          alt="Esfera translúcida flutuando sobre um campo de flores, identidade visual da Perplexity"
          className="pointer-events-none absolute right-0 top-0 h-full w-full object-cover opacity-20 mix-blend-luminosity md:w-3/5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
        <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-primary/25 blur-3xl float-slow" />
        <div className="relative mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <img
                src={logoAsset.url}
                alt="Logo da Perplexity"
                className="h-12 w-12 rounded-xl bg-foreground p-1.5 shadow-lg"
              />
              <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                IA aplicada a pequenos negócios
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-gradient max-w-4xl text-6xl font-semibold leading-[0.95] md:text-8xl">
              Perplexity AI
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              O motor de respostas que pesquisa, cita e decide com você.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-14 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-10 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
              Role para começar a apresentação
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. O que é */}
      <Slide id="o-que-e" index="01" label="O que é">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Não é um chat que adivinha. É uma busca que <span className="text-gradient">responde</span>.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A cada pergunta, a Perplexity consulta a web ao vivo, lê as páginas encontradas e escreve
            uma resposta direta com os números da citação apontando exatamente de onde cada afirmação
            veio.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: "Pergunta em linguagem natural",
              text: "Você descreve o problema do seu negócio como falaria com um consultor.",
            },
            {
              icon: Globe,
              title: "Busca na web ao vivo",
              text: "O sistema seleciona e lê fontes atuais em vez de depender apenas de memória de treino.",
            },
            {
              icon: Quote,
              title: "Resposta com citações",
              text: "Cada trecho traz a referência clicável, permitindo verificar antes de decidir.",
            },
          ].map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="card-elegant h-full p-8">
                <step.icon className="text-primary" size={26} />
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Slide>

      {/* 3. Sobre a Perplexity */}
      <Slide id="sobre" index="02" label="Sobre a Perplexity">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            De startup de San Francisco a{" "}
            <span className="text-gradient">motor de respostas</span> do mundo
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A Perplexity AI foi fundada em 2022 por Aravind Srinivas, Denis Yarats, Johnny Ho e Andy
            Konwinski, com sede em São Francisco, Califórnia. A ideia era simples: em vez de entregar
            uma lista de links, a IA deveria ler as fontes e responder diretamente, citando cada
            informação.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Calendar,
              title: "Fundação",
              text: "Lançada em 2022, a empresa cresceu rapidamente ao propor uma interface de busca conversacional com fontes visíveis.",
            },
            {
              icon: Users,
              title: "Fundadores",
              text: "Aravind Srinivas (CEO), Denis Yarats, Johnny Ho e Andy Konwinski — ex-pesquisadores e engenheiros de empresas como Google, OpenAI e Meta.",
            },
            {
              icon: Rocket,
              title: "Modelo de negócio",
              text: "Freemium: uso gratuito com limites, e plano Perplexity Pro que desbloqueia buscas avançadas, Deep Research e escolha de modelos.",
            },
            {
              icon: TrendingUp,
              title: "Trajetória",
              text: "Passou de ferramenta de nicho a uma das principais alternativas de busca com IA, com parcerias de publicação e expansão de recursos.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="card-elegant h-full p-7">
                <item.icon className="text-primary" size={24} />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Slide>

      {/* 4. Fundadores */}
      <Slide id="fundadores" index="03" label="Quem criou">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            As quatro pessoas por trás da{" "}
            <span className="text-gradient">Perplexity</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Um time de pesquisadores e engenheiros de IA que se conheceu entre laboratórios de ponta
            e decidiu reinventar a forma de buscar informação.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 110}>
              <div className="card-elegant group h-full overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={founder.photo}
                    alt={`Retrato de ${founder.name}, cofundador da Perplexity`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-display text-xs tabular-nums text-primary backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{founder.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">
                    {founder.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {founder.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Slide>

      {/* 4. Recursos */}
      <Slide id="recursos" index="04" label="Principais recursos">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Cinco camadas de <span className="text-gradient">profundidade</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.name} delay={i * 90}>
              <div className="card-elegant group h-full p-8 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <feature.icon className="text-accent" size={24} />
                  <h3 className="text-xl font-semibold">{feature.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={features.length * 90}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-border p-8">
              <Boxes className="text-primary" size={24} />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Todos os recursos partilham a mesma base: buscar, ler, citar. Muda apenas a
                profundidade e o formato da entrega.
              </p>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* 5. Nichos */}
      <Slide id="nichos" index="05" label="Aplicações por nicho">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Três negócios de bairro, três usos <span className="text-gradient">concretos</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {niches.map((niche, i) => (
            <Reveal key={niche.name} delay={i * 140}>
              <div className="card-elegant flex h-full flex-col p-8">
                <niche.icon className="text-primary" size={28} />
                <h3 className="mt-6 text-2xl font-semibold">{niche.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {niche.scope}
                </p>
                <div className="mt-7 space-y-6 text-sm leading-relaxed">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">Problema</p>
                    <p className="text-muted-foreground">{niche.problem}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">
                      Como a Perplexity ajuda
                    </p>
                    <p className="text-muted-foreground">{niche.help}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Slide>

      {/* 6. Demonstração */}
      <Slide id="demonstracao" index="06" label="Demonstração prática">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Prompts testados na <span className="text-gradient">prática</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Clique em cada quadro para inserir o print da sua conversa. As legendas são editáveis:
            clique no texto e escreva o seu comentário.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              src: prompt1,
              caption: "Prompt 1 — Tendências de cardápio e faixa de preço praticada no bairro.",
            },
            {
              src: prompt2,
              caption: "Prompt 2 — Análise de concorrentes diretos e diferenciais de comunicação.",
            },
            {
              src: prompt3,
              caption: "Prompt 3 — Plano de conteúdo de quatro semanas para redes sociais.",
            },
          ].map((item, i) => (
            <Reveal key={item.caption} delay={i * 120}>
              <ScreenshotSlot caption={item.caption} defaultSrc={item.src} />
            </Reveal>
          ))}
        </div>

      </Slide>

      {/* 7. Caso real */}
      <Slide id="caso" index="07" label="Caso real">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Estudo de caso: <span className="text-gradient">negócio local</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-elegant mt-12 p-8 md:p-12">
            <Editable className="text-2xl font-semibold md:text-3xl">
              Nome do negócio, ramo e cidade
            </Editable>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                ["Problema", "Descreva a dificuldade concreta enfrentada pelo negócio."],
                ["Como a IA ajudou", "Conte quais perguntas foram feitas e o que a Perplexity entregou."],
                ["Resultado", "Registre o que mudou: decisões, tempo economizado, vendas, conteúdo publicado."],
              ].map(([title, placeholder]) => (
                <div key={title}>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">{title}</p>
                  <Editable className="min-h-28 text-sm leading-relaxed text-muted-foreground">
                    {placeholder}
                  </Editable>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* 8. Uso responsável */}
      <Slide id="uso-responsavel" index="08" label="Uso responsável">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-destructive/40 bg-destructive/10 p-8 md:p-14">
            <AlertTriangle className="text-destructive" size={32} />
            <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              A citação não é garantia de verdade. Confira sempre.
            </h2>
            <ul className="mt-10 grid gap-6 text-sm leading-relaxed text-foreground/85 md:grid-cols-2">
              <li>
                <strong className="font-semibold">Interpretação equivocada da fonte:</strong> a IA
                pode resumir um dado fora de contexto ou inverter uma conclusão do texto original.
              </li>
              <li>
                <strong className="font-semibold">Fontes de qualidade desigual:</strong> blogs,
                fóruns e páginas comerciais podem aparecer ao lado de estudos sérios.
              </li>
              <li>
                <strong className="font-semibold">Dados desatualizados:</strong> preços, leis e
                tendências mudam; verifique a data de publicação do link citado.
              </li>
              <li>
                <strong className="font-semibold">Decisão é humana:</strong> use a resposta como
                ponto de partida, nunca como laudo final para investimentos ou obrigações legais.
              </li>
            </ul>
          </div>
        </Reveal>
      </Slide>

      {/* 8. Encerramento */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-center md:px-16">
        <div className="mesh-bg pointer-events-none absolute inset-0" />
        <div className="dots-bg pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <Sparkles className="mx-auto text-primary" size={28} />
          </Reveal>
          <Reveal delay={140}>
            <h2 className="mt-10 text-3xl font-semibold leading-tight md:text-6xl">
              Se você tivesse apenas este recurso de IA e um pequeno negócio local,{" "}
              <span className="text-gradient">como usaria essa ferramenta amanhã?</span>
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-16 flex items-center justify-center gap-4">
              <img
                src={logoAsset.url}
                alt="Logo da Perplexity"
                className="h-10 w-10 rounded-lg bg-foreground p-1.5 shadow-md"
              />
              <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Obrigado · Perguntas
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
