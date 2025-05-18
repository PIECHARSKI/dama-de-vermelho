import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialCard } from "@/components/testimonial-card"
import { CountdownTimer } from "@/components/countdown-timer"
import { CheckCircle } from "lucide-react"
import { FaqSection } from "@/components/faq-section"
import { CTAButton } from "@/components/cta-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto à esquerda */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                <span className="block text-red-500 font-normal">Protocolo</span>
                <span className="block text-5xl md:text-7xl mt-2 font-semibold">Dama de Vermelho</span>
              </h1>

              <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-300">
                O método secreto que já fez <span className="text-red-500 font-medium">15.327 mulheres comuns</span>{" "}
                virarem o jogo e terem homens implorando por atenção.
              </p>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
                <p className="text-lg mb-8 italic text-gray-300">
                  "Ele me tratava como lixo. Agora me implora de joelhos. O que mudou?
                  <span className="text-red-400 font-normal"> 14 dias usando o Protocolo Dama de Vermelho</span>."
                </p>

                <CTAButton>QUERO ESSE PODER AGORA</CTAButton>
              </div>
            </div>

            {/* Imagem à direita com efeito de borda estilizada - USANDO IMG PADRÃO */}
            <div className="relative max-w-[400px] mx-auto">
              {/* Fundo com gradiente para ajudar no efeito de recorte */}
              <div className="absolute inset-0 bg-gradient-radial from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a] z-0"></div>

              {/* Efeito de brilho vermelho atrás da imagem */}
              <div
                className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent z-0 animate-glow-pulse"
                style={{ filter: "blur(60px)" }}
              ></div>

              {/* Container da imagem com efeito glassmorphism */}
              <div
                className="relative z-10 backdrop-blur-sm bg-black/10 rounded-2xl overflow-hidden"
                style={{ aspectRatio: "9/16" }}
              >
                {/* Borda estilizada */}
                <div className="absolute inset-0 rounded-2xl border-2 border-red-500/30 z-20 pointer-events-none"></div>

                {/* Efeito de brilho nas bordas */}
                <div
                  className="absolute inset-0 rounded-2xl z-10 pointer-events-none animate-glow-pulse"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(220, 38, 38, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                ></div>

                {/* Gradiente superior */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none"></div>

                {/* Gradiente inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>

                {/* Imagem principal - usando tag img padrão em vez do componente Image */}
                <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2029%2C%202025%2C%2006_55_43%20PM%20%281%29-xANCxHtWclfmmIJa3JWeEoEIiWuCnq.png"
                    alt="Mulher de vestido vermelho"
                    className="w-full h-full object-contain z-10"
                    style={{
                      filter: "contrast(1.1) brightness(1.05)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#120a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
              A verdade cruel que <span className="text-red-500 font-normal">ninguém</span> te conta
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-lg mb-8 text-gray-300">Você está cansada de...</p>

                <ul className="space-y-6">
                  {[
                    "Ser ignorada enquanto ele responde outras na hora",
                    'Ver mulheres "normais" conseguindo os melhores homens',
                    "Implorar por migalhas de atenção como uma carente",
                    "Ele olhar para outras na sua frente sem disfarçar",
                    "Se sentir invisível e substituível a qualquer momento",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-red-500 mt-1 opacity-80">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg mt-8 text-gray-300">
                  Não é culpa sua. <span className="text-red-500">93% das mulheres</span> nunca descobriram o código
                  secreto que faz homens virarem escravos.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                {/* Nova imagem na seção "A verdade cruel" */}
                <Image
                  src="/mulher-vestido-vermelho.jpg"
                  alt="Mulher de vestido vermelho com homem"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-md bg-black/20">
                  <p className="text-lg text-gray-200">
                    Os homens são criaturas <span className="text-red-400">previsíveis</span>, programados por milhares
                    de anos de evolução para responder a certos gatilhos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">
              Conheça o <span className="text-red-500 font-normal">Protocolo Dama de Vermelho</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              O sistema proibido que <span className="text-red-500">transforma qualquer mulher</span> em uma força
              magnética que homens não conseguem resistir
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Poder Interior",
                image: "/poder_interior.jpg",
                description:
                  "Desperte a deusa que faz homens pararem no meio da rua só pra te olhar. Sem precisar mudar sua aparência.",
              },
              {
                title: "Sedução Estratégica",
                image: "/seducao_estrategica.jpg",
                description:
                  "Domine as técnicas secretas que fazem homens ficarem viciados em você sem nem perceberem o que está acontecendo.",
              },
              {
                title: "Desejo Inabalável",
                image: "/desejo_inabalavel.jpg",
                description:
                  "Faça ele pensar em você obsessivamente, mesmo cercado de mulheres mais jovens e mais bonitas.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="relative h-80 w-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-3 text-red-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-light mb-4 text-center">
              Isso <span className="text-red-500">NÃO</span> é mais um papo furado sobre "ame a si mesma"
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              É um sistema baseado em psicologia masculina bruta, testado com mais de{" "}
              <span className="text-red-500 font-medium">15.327 mulheres reais</span> que viraram o jogo, com{" "}
              <span className="text-red-500 font-medium">97% de sucesso garantido</span>.
            </p>
            <p className="text-gray-300 text-center">
              Não importa sua idade, peso ou aparência. O Protocolo funciona porque ataca direto o cérebro primitivo
              masculino.
            </p>
          </div>
        </div>
      </section>

      {/* Antes e Depois Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#120a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">
              A <span className="text-red-500 font-normal">Transformação</span> Brutal
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-16">
              Veja o que acontece quando você usa o Protocolo Dama de Vermelho
            </p>

            <div className="relative mb-16">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent w-full absolute top-1/2 transform -translate-y-1/2 z-10"></div>
              <div className="flex justify-center">
                <span className="bg-[#0a0a0a] px-6 text-lg font-light text-red-400 relative z-20">ANTES & DEPOIS</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* ANTES */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-6 text-white">Antes do Protocolo</h3>
                  <ul className="space-y-4">
                    {[
                      "Ele te deixa no vácuo por horas (ou dias)",
                      'Ele diz que "não quer nada sério" (com você)',
                      "Ele some depois de conseguir sexo",
                      "Ele elogia outras mulheres na sua frente",
                      "Ele só te procura quando está carente",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="text-red-500/80 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DEPOIS */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-6 text-red-400">Depois do Protocolo</h3>
                  <ul className="space-y-4">
                    {[
                      "Ele responde suas mensagens em SEGUNDOS",
                      "Ele cancela reuniões importantes só pra te ver",
                      "Ele implora pela sua aprovação como um cachorrinho",
                      "Ele morre de ciúmes de outros homens",
                      "Ele faz loucuras pra te impressionar",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="text-red-400 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300">
                O <span className="text-red-500">Protocolo Dama de Vermelho</span> não só muda como os homens te tratam,
                mas como você se vê. É a diferença entre ser uma opção e ser a{" "}
                <span className="italic">ÚNICA escolha</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">
              <span className="text-red-500 font-normal">+15.000</span> Mulheres Dominaram Seus Homens
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-16">
              Histórias reais de mulheres que viraram o jogo em <span className="text-red-500">menos de 30 dias</span>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                name="Mariana, 32"
                image="/mariana.jpg"
                quote="Depois do divórcio, achei que tava acabada. Em 3 semana usando o Protocolo, tenho 5 homens implorando por um encontro. Agora EU que escolho quem merece minha atenção!!!"
              />
              <TestimonialCard
                name="Juliana, 41"
                image="/juliana.jpeg"
                quote="Com 41 anos, achei que estava fóra do jogo. Hoje tenho homem de 30 anos me chamando de 'deusa'. O Protocolo é uma arma poderoza que mudou minha vida."
              />
              <TestimonialCard
                name="Camila, 27"
                image="/camila.jpg"
                quote="Meu ex me trocou por outra mina, foi um baque! Usei o Protocolo e em 2 meses ele tava de joelhos na minha porta implorando kkkkk Agora sou EU que decido quando ele me vê, tá ligado?"
              />
              <TestimonialCard
                name="Fernanda, 35"
                image="/fernanda.jpg"
                quote="Sempre fui a 'amiga' dos homem. O Protocolo me trasformou na mulher que eles sonha toda noite e não consegue ter. Nunca mais fui invisivel pra eles."
              />
              <TestimonialCard
                name="Patrícia, 29"
                image="/patricia.jpg"
                quote="Meu namorado tava cada vez mais frio cmg. Dps do Protocolo, ele cancelou uma viagem importante pq 'não aguenta ficar longe de mim'. Nunca vi ele tão obcecado, é mto doido ver o poder q tenho agora!"
              />
              <TestimonialCard
                name="Luciana, 38"
                image="/luciana.jpg"
                quote="Eu era invizivel para homens ricos. Hj tenho empresarios e medicos competindo pela minha atenção. O poder que eu cinto é viciante, não consigo mais viver sem."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#120a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">
              Bônus <span className="text-red-500 font-normal">Proibidos</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-16">
              Além do Protocolo completo, você recebe estes 4 bônus secretos que multiplicam seu poder
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* BÔNUS 1 */}
              <div className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-red-500/20">
                <div className="relative aspect-[3/4] w-full flex items-center justify-center bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/palavras_cleopatra.jpg"
                      alt="As Palavras de Cleópatra"
                      fill
                      className="object-contain"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/30">
                    <h3 className="text-xl font-medium mb-2 text-red-400">As Palavras de Cleópatra</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Frases que fizeram reis se ajoelharem. Use estas palavras e veja homens perdendo o controle na
                      hora.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-400">Valor: R$ 97</span>
                      <span className="text-sm font-medium text-red-400">GRÁTIS</span>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-red-600/80 text-white text-sm font-medium py-1 px-3 rounded-full z-20">
                    1
                  </div>
                </div>
              </div>

              {/* BÔNUS 2 */}
              <div className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-red-500/20">
                <div className="relative aspect-[3/4] w-full flex items-center justify-center bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/sereia_venenosa.jpg"
                      alt="Sereia Venenosa"
                      fill
                      className="object-contain"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/30">
                    <h3 className="text-xl font-medium mb-2 text-red-400">Sereia Venenosa</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      A técnica mental que te coloca na cabeça dele como uma obsessão. Use com cuidado: você terá
                      controle total.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-400">Valor: R$ 97</span>
                      <span className="text-sm font-medium text-red-400">GRÁTIS</span>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-red-600/80 text-white text-sm font-medium py-1 px-3 rounded-full z-20">
                    2
                  </div>
                </div>
              </div>

              {/* BÔNUS 3 */}
              <div className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-red-500/20">
                <div className="relative aspect-[3/4] w-full flex items-center justify-center bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/radar_venus_novo.jpg"
                      alt="Radar de Vênus"
                      fill
                      className="object-contain"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/30">
                    <h3 className="text-xl font-medium mb-2 text-red-400">Radar de Vênus</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      O detector que revela quando ele está mentindo ou escondendo sentimentos. Inspirado nos segredos
                      de Marilyn Monroe.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-400">Valor: R$ 97</span>
                      <span className="text-sm font-medium text-red-400">GRÁTIS</span>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-red-600/80 text-white text-sm font-medium py-1 px-3 rounded-full z-20">
                    3
                  </div>
                </div>
              </div>

              {/* BÔNUS 4 */}
              <div className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-red-500/20">
                <div className="relative aspect-[3/4] w-full flex items-center justify-center bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/veneno_entre_lencois.jpg"
                      alt="Veneno entre os Lençóis"
                      fill
                      className="object-contain"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/30">
                    <h3 className="text-xl font-medium mb-2 text-red-400">Veneno entre os Lençóis</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Técnicas que fazem ele ficar viciado em você na cama. Ele nunca mais vai olhar para outra mulher.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-400">Valor: R$ 97</span>
                      <span className="text-sm font-medium text-red-400">GRÁTIS</span>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-red-600/80 text-white text-sm font-medium py-1 px-3 rounded-full z-20">
                    4
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-light mb-2">
                Valor Total: <span className="line-through text-gray-500">R$ 388</span>
              </p>
              <p className="text-lg text-gray-300">
                Hoje, todos estes bônus estão inclusos no seu acesso ao Protocolo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">
              Perguntas <span className="text-red-500 font-normal">Frequentes</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-16">
              Ainda com dúvidas? Aqui estão as respostas que você precisa para dar o próximo passo
            </p>

            <div className="relative mb-16">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent w-full absolute top-1/2 transform -translate-y-1/2 z-10"></div>
            </div>

            <FaqSection />

            <div className="mt-12 text-center">
              <CTAButton>QUERO TER ESSE PODER AGORA</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#120a0a]">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-red-500/10 flex items-center justify-center">
                  <span className="text-4xl">🛡️</span>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-light mb-4">Garantia Blindada de 30 Dias</h2>

                <p className="text-gray-300 mb-4">
                  Se em 30 dias você não tiver homens mudando completamente com você, devolvo seu dinheiro na hora.{" "}
                  <span className="text-red-500">Apenas 0.8% das mulheres pediram reembolso.</span>
                </p>

                <p className="text-gray-300">
                  Sem perguntas. Sem enrolação. Você não tem NADA a perder e tudo a ganhar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-16">
              É Hora de <span className="text-red-500 font-normal">Decidir</span>
            </h2>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto">
              <h3 className="text-2xl font-light mb-6">Protocolo Dama de Vermelho</h3>

              <div className="flex justify-center items-center gap-4 mb-8">
                <span className="text-xl line-through text-gray-500">R$ 497</span>
                <span className="text-3xl font-medium text-red-500">R$ 29,90</span>
                <span className="text-sm bg-red-500/20 text-red-400 px-2 py-1 rounded-full">94% OFF</span>
              </div>

              <ul className="space-y-4 text-left mb-8">
                {[
                  "Protocolo Dama de Vermelho completo",
                  "4 bônus proibidos (valor: R$ 388)",
                  "Suporte VIP por 30 dias",
                  "Acesso vitalício a atualizações",
                  "Garantia de 7 dias sem perguntas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-8">
                {/* Usando o timer com 2 horas fixas */}
                <CountdownTimer hours={2} />
              </div>

              <CTAButton fullWidth>QUERO TER ESSE PODER AGORA</CTAButton>

              <p className="text-xs mt-4 text-gray-400">Pagamento 100% seguro via PIX, cartão ou boleto</p>
            </div>

            <p className="text-gray-300 mt-12 max-w-2xl mx-auto">
              <span className="font-medium">ATENÇÃO:</span> Os bônus e o preço especial somem em breve.{" "}
              <span className="text-red-500">Apenas 37 vagas</span> restantes neste valor. Não perca a chance de virar o
              jogo para sempre.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Protocolo Dama de Vermelho. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
