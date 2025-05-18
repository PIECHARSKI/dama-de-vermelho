"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Isso funciona mesmo ou é só mais um truque para tirar dinheiro de mulheres desesperadas?",
      answer:
        "Entendo sua desconfiança. O mercado está cheio de promessas vazias. A diferença? O Protocolo Dama de Vermelho tem mais de 15.327 casos de sucesso documentados. Não são teorias, são técnicas baseadas em psicologia masculina comprovada. Por isso oferecemos garantia de 30 dias - se não funcionar para você, devolvemos seu dinheiro. Apenas 0.8% das mulheres pediram reembolso. Os homens são muito mais previsíveis do que você imagina.",
    },
    {
      question: "Tenho mais de 40 anos. Não é tarde demais para mim?",
      answer:
        "Essa é a mentira que a sociedade quer que você acredite. A verdade? Mulheres maduras têm vantagem quando aplicam o Protocolo. Temos centenas de alunas com 40, 50 e até 60 anos que hoje têm homens 10, 15 anos mais jovens implorando por atenção. O Protocolo não depende da sua idade, mas sim do seu domínio dos gatilhos psicológicos masculinos que nunca mudam, não importa a geração.",
    },
    {
      question: "Não sou bonita nem magra. Isso vai funcionar para mim?",
      answer:
        "O maior segredo que ninguém te conta: a aparência é apenas 20% do poder de atração feminino. O Protocolo Dama de Vermelho ataca diretamente os 80% que realmente importam - os gatilhos psicológicos que fazem homens ficarem obsessivos. Temos inúmeros casos de mulheres que a sociedade não considera 'padrão' e que hoje têm homens ricos e atraentes completamente rendidos. A beleza atrai olhares, mas o Protocolo cria obsessão.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "A maioria das alunas percebe mudanças drásticas nos primeiros 7 dias. Homens que antes demoravam horas para responder começam a ficar ansiosos quando você não responde em minutos. Em 14-21 dias, o comportamento dele muda completamente - de distante para completamente devotado. O recorde foi de uma aluna que em 3 dias fez o ex-namorado cancelar uma viagem internacional só para vê-la. Mas lembre-se: quanto mais você aplicar as técnicas, mais poderosos serão os resultados.",
    },
    {
      question: "Isso não é manipulação? Não é antiético?",
      answer:
        "Manipulação é o que homens fazem com mulheres há séculos - te deixando insegura, te fazendo duvidar do seu valor, te tratando como descartável. O Protocolo Dama de Vermelho apenas nivela o jogo. Você não está forçando ninguém a nada. Está simplesmente ativando desejos que já existem naturalmente nos homens, mas direcionando-os para você em vez de para outra. É como aprender as regras de um jogo que você já está jogando, mas perdendo sem saber por quê.",
    },
    {
      question: "E se ele descobrir que estou usando essas técnicas?",
      answer:
        "Essa é a beleza do Protocolo: ele é indetectável. As técnicas trabalham diretamente com o subconsciente masculino. Mesmo que você contasse a ele exatamente o que está fazendo, ele continuaria respondendo. É como explicar para alguém por que eles sentem fome - a explicação não muda a sensação. Na verdade, muitas alunas contam para seus parceiros depois de meses, e a resposta mais comum é: 'Não me importa o que você fez, só não pare'.",
    },
    {
      question: "R$ 29,90 parece barato demais. Qual é a pegadinha?",
      answer:
        "A pegadinha é que esse preço é temporário. O valor normal é R$ 497. Estamos fazendo essa oferta agressiva por dois motivos: 1) Queremos criar uma onda de casos de sucesso rapidamente e 2) Sabemos que depois que você experimentar o poder do Protocolo, vai querer nossos outros produtos. É uma estratégia de marketing, sim. Mas você sai ganhando - pagando menos de 10% do valor por um método que pode transformar completamente sua vida amorosa. E sim, não há mensalidades ou cobranças escondidas.",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl mb-4 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
              <span className="text-lg text-white group-hover:text-red-400 transition-colors">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-300">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
