import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FloatingNotification from "@/components/FloatingNotification";
import { AlertTriangle, Brain, TrendingDown, Users, Award, BookOpen, Heart, Smartphone, CheckCircle2, Gift, Shield, Calendar, Globe, Sparkles, X, Crown, Zap, Target, ClipboardList } from "lucide-react";
import isabellaPhoto from "@/assets/isabella-centeno.png";
const Index = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background">
      <FloatingNotification />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Salve Seu Filho do Vício em Smartphones e Redes Sociais!
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium animate-fade-in">
            O ÚNICO MÉTODO SOBRE REEDUCAÇÃO DIGITAL COMPROVADO em Vários Países!
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Desenvolvido pela especialista Isabella Centeno, este Método Revolucionário transforma o comportamento do seu filho em 30 dias.
          </p>
          <Button variant="coral" size="lg" onClick={scrollToPrice} className="text-lg px-10 py-6 h-auto animate-fade-in-up">
            SIM, EU QUERO CONHECER O MÉTODO!
          </Button>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-aqua/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10 shadow-soft bg-primary/5 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0 shadow-soft">
                <img src={isabellaPhoto} alt="Isabella Centeno - Especialista em Desintoxicação Digital" className="w-full h-full object-cover object-center" />
                <Award className="absolute -bottom-2 -right-2 w-12 h-12 text-primary bg-background rounded-full p-2 shadow-card" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Isabella Centeno</h2>
                <p className="text-lg text-primary font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Sua Guia de Autoridade
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Com 11 anos de experiência e mais de 10.000 famílias atendidas, Isabella desenvolveu um método atestado cientificamente que está transformando vidas ao redor do mundo.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Conquistas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Card className="p-6 text-center shadow-card bg-background/80 backdrop-blur-sm">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">11 Anos</p>
              <p className="text-sm text-muted-foreground">de Experiência em Desenvolvimento Comportamental</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card bg-background/80 backdrop-blur-sm">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">+10 Mil</p>
              <p className="text-sm text-muted-foreground">Famílias Transformadas</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card bg-background/80 backdrop-blur-sm">
              <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">Validado</p>
              <p className="text-sm text-muted-foreground">em Vários Países</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card bg-background/80 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">Inovadora</p>
              <p className="text-sm text-muted-foreground">em Reeducação Digital</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Os 4 Malefícios do Uso Excessivo de Telas Que Estão{" "}
            <span className="text-coral">Destruindo o Desenvolvimento</span> do Seu Filho(a)
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Você reconhece estes sinais na sua família? É hora de agir antes que seja tarde demais.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[{
            icon: Heart,
            title: "Saúde Física",
            items: ["Distúrbios do sono", "Sedentarismo excessivo", "Problemas posturais", "Fadiga constante"]
          }, {
            icon: Brain,
            title: "Saúde Mental",
            items: ["Ansiedade e irritabilidade", "Dependência emocional", "Dificuldade de concentração", "Alterações de humor"]
          }, {
            icon: BookOpen,
            title: "Desempenho Escolar",
            items: ["Queda nas notas", "Falta de foco nos estudos", "Procrastinação constante", "Dificuldade de aprendizado"]
          }, {
            icon: Users,
            title: "Vínculos Familiares",
            items: ["Isolamento social", "Conflitos constantes", "Perda de diálogo", "Distanciamento afetivo"]
          }].map((item, i) => <Card key={i} className="p-6 shadow-card hover:shadow-soft transition-shadow animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-coral" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-foreground">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((listItem, idx) => <li key={idx} className="flex items-start gap-2 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                      <span className="text-sm">{listItem}</span>
                    </li>)}
                </ul>
              </Card>)}
          </div>
          
          {/* Alert Box */}
          <Card className="max-w-4xl mx-auto bg-coral/10 border-coral/20 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <AlertTriangle className="w-6 h-6 text-coral flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  ATENÇÃO: Não espere mais!
                </h3>
                <p className="text-foreground/90">
                  Cada dia de uso excessivo pode impactar permanentemente o desenvolvimento cerebral do seu filho. Aplique o Método e veja resultados em 21 dias!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-aqua/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Conheça o <span className="text-primary">Método</span>...
            <Sparkles className="w-8 h-8 text-primary" />
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">Assista e descubra como transformar a vida do seu filho</p>
          <Card className="p-6 bg-primary/5 border-primary/20 shadow-soft">
            <div className="aspect-video bg-muted rounded-lg shadow-card flex items-center justify-center border-2 border-primary/10">
              <p className="text-muted-foreground text-lg">📹 Vídeo de 4 minutos aqui</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground leading-tight">
            Histórias Reais: Pais Que Aplicaram o Método e Presenciaram a Transformação na Vida de Seus Filhos
          </h2>
          
          <Carousel className="max-w-4xl mx-auto" opts={{
          loop: true
        }}>
            <CarouselContent>
              {[{
              initials: "FR",
              name: "Fábio R.",
              location: "Belo Horizonte - MG",
              problem: "Queda nas notas escolares",
              testimonial: "As notas do meu filho caíram drasticamente e ele não conseguia se concentrar nos estudos. Investir na Versão Premium foi a melhor decisão! O Modo Foco ajudou demais para ele ter mais disciplina. Em 2 meses as notas subiram e ele está muito mais focado. Valeu cada centavo!",
              solution: "Planejador de Atividades Offline (Premium)",
              result: "2 meses"
            }, {
              initials: "MC",
              name: "Mariana C.",
              location: "São Paulo - SP",
              problem: "Ansiedade e isolamento social",
              testimonial: "Minha filha passava mais de 8 horas por dia no celular e estava com crises de ansiedade. O Método Desintoxicação Digital mudou nossa vida! Começamos a fazer as atividades em família sugeridas no Guia de Atenção Plena e ela melhorou drasticamente!",
              solution: "E-book: Atenção Plena em Família",
              result: "3 semanas"
            }, {
              initials: "RS",
              name: "Roberto S.",
              location: "Rio de Janeiro - RJ",
              problem: "Conflitos familiares constantes",
              testimonial: "As brigas em casa eram diárias por causa do celular. Meu filho de 14 anos ficava agressivo quando pedíamos para largar o telefone. Aplicamos o método passo a passo e em menos de um mês tivemos uma conversa saudável de pai e filho depois muito tempo! O questionário de progresso foi fundamental para avançarmos!",
              solution: "Questionário de Progresso",
              result: "3 semanas"
            }, {
              initials: "AC",
              name: "Ana Clara P.",
              location: "Curitiba - PR",
              problem: "Distúrbios do sono e irritabilidade",
              testimonial: "Meu filho de 10 anos tinha insônia e acordava irritado todos os dias. O Guia de Apps e Jogos Educativos me mostrou alternativas saudáveis e o método trouxe uma rotina que funcionou! Agora ele dorme cedo, acorda disposto e até voltou a brincar ao ar livre. Incrível como pequenas mudanças fazem diferença!",
              solution: "Guia de Apps e Jogos Educativos",
              result: "21 dias"
            }, {
              initials: "LS",
              name: "Lucas Silva",
              location: "Brasília - DF",
              problem: "TDAH e dificuldade extrema de foco",
              testimonial: "Como pai de uma criança com TDAH, estava desesperado com o impacto das telas no comportamento dele. O e-book TDAH e Telas foi revelador! Entendi como o uso excessivo agravava os sintomas. Seguindo as orientações, conseguimos reduzir o tempo de tela em 70% e ele melhorou muito na escola e em casa!",
              solution: "E-book: TDAH e Telas",
              result: "1 mês"
            }].map((testimonial, i) => <CarouselItem key={i}>
                  <Card className="p-8 md:p-10 shadow-soft">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-aqua flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">{testimonial.initials}</span>
                      </div>
                      
                      {/* Name and Location */}
                      <h3 className="text-xl font-bold text-primary mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{testimonial.location}</p>
                      
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, idx) => <span key={idx} className="text-coral text-2xl">★</span>)}
                      </div>
                      
                      {/* Problem Badge */}
                      <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Problema: {testimonial.problem}
                      </div>
                      
                      {/* Testimonial Text */}
                      <div className="relative mb-6">
                        <p className="text-foreground/90 italic leading-relaxed text-lg">
                          "{testimonial.testimonial}"
                        </p>
                      </div>
                      
                      {/* Solution and Result Badges */}
                      <div className="flex flex-wrap justify-center gap-3">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          Solução: {testimonial.solution}
                        </div>
                        <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium">
                          <span className="w-2 h-2 rounded-full bg-coral" />
                          Resultado em: {testimonial.result}
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Leve Agora e Ganhe um <span className="text-coral">Arsenal de Ferramentas</span> de Apoio
          </h2>
          <p className="text-center text-muted-foreground mb-2 text-lg">
            Exclusivo na compra! Mais de R$ 350,00 em conteúdo adicional
          </p>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Gift className="w-5 h-5 text-coral" />
            <p className="text-coral font-bold text-sm">
              🎁 BÔNUS LIMITADO: Disponível apenas nas primeiras 100 vendas
            </p>
          </div>

          <Carousel className="max-w-5xl mx-auto mb-12" opts={{
          loop: true
        }}>
            <CarouselContent>
              {/* Bonus 1 - Premium */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 shadow-card h-full border-2 border-coral/30 bg-coral/5 relative">
                  <div className="absolute top-4 right-4">
                    <span className="bg-coral text-white px-4 py-1 rounded-full text-xs font-bold">
                      PREMIUM
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center mb-4 mt-2">
                    <Target className="w-8 h-8 text-coral" />
                  </div>
                  <p className="text-coral text-sm font-semibold mb-2">Ferramenta Premium #1</p>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Modo Foco</h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    Ferramenta criada para auxiliar os pais nos horários de atividades e estudos determinados.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-coral/20">
                    <span className="text-sm text-muted-foreground">Ferramenta exclusiva</span>
                    <span className="text-coral font-bold text-lg">R$ 127,00</span>
                  </div>
                </Card>
              </CarouselItem>

              {/* Bonus 2 - Premium */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 shadow-card h-full border-2 border-coral/30 bg-coral/5 relative">
                  <div className="absolute top-4 right-4">
                    <span className="bg-coral text-white px-4 py-1 rounded-full text-xs font-bold">
                      PREMIUM
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center mb-4 mt-2">
                    <ClipboardList className="w-8 h-8 text-coral" />
                  </div>
                  <p className="text-coral text-sm font-semibold mb-2">Ferramenta Premium #2</p>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Questionários de Progresso</h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    Questionários com perguntas objetivas relacionadas a cada fase do método para medir a evolução comportamental e mudanças.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-coral/20">
                    <span className="text-sm text-muted-foreground">Acompanhamento completo</span>
                    <span className="text-coral font-bold text-lg">R$ 97,00</span>
                  </div>
                </Card>
              </CarouselItem>

              {/* Bonus 3 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 shadow-card h-full border border-primary/20 bg-primary/5">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-primary text-sm font-semibold mb-2">Ebook Bônus #1</p>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Atenção Plena em Família</h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    Guia completo com técnicas de mindfulness adaptadas para crianças e adolescentes. Aprenda exercícios práticos para melhorar o foco e reduzir a ansiedade.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                    <span className="text-sm text-muted-foreground">85 páginas</span>
                    <span className="text-primary font-bold text-lg">R$ 47,00</span>
                  </div>
                </Card>
              </CarouselItem>

              {/* Bonus 4 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 shadow-card h-full border border-aqua/20 bg-aqua/5">
                  <div className="w-16 h-16 rounded-full bg-aqua/20 flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-aqua" />
                  </div>
                  <p className="text-aqua text-sm font-semibold mb-2">Ebook Bônus #2</p>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Guia de Apps e Jogos Educativos</h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    Lista curada dos melhores aplicativos educativos por faixa etária. Transforme o tempo de tela em aprendizado produtivo.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-aqua/20">
                    <span className="text-sm text-muted-foreground">60 páginas</span>
                    <span className="text-aqua font-bold text-lg">R$ 37,00</span>
                  </div>
                </Card>
              </CarouselItem>

              {/* Bonus 5 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 shadow-card h-full border border-primary/20 bg-primary/5">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-primary text-sm font-semibold mb-2">Ebook Bônus #3</p>
                  <h3 className="font-bold text-xl mb-3 text-foreground">TDAH e Telas</h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    Estratégias específicas para pais de crianças com TDAH. Entenda como o uso de telas afeta o transtorno e como gerenciar adequadamente.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                    <span className="text-sm text-muted-foreground">72 páginas</span>
                    <span className="text-primary font-bold text-lg">R$ 42,00</span>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Total Value Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-soft bg-gradient-to-br from-coral/10 to-coral/5 border-coral/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gift className="w-6 h-6 text-coral" />
                <p className="text-foreground font-semibold">Valor Total dos Bônus</p>
              </div>
              <p className="text-5xl font-bold text-coral mb-2">R$ 350,00</p>
              <p className="text-muted-foreground text-sm">Grátis para os primeiros 100 compradores</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">Adiquira Agora o Método e Transforme a Vida do Seu Filho</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Versão Simples */}
            <Card className="p-8 shadow-card relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Versão Simples</h3>
              
              {/* Preços */}
              <div className="mb-2">
                <span className="text-2xl text-muted-foreground line-through">R$ 49,90</span>
              </div>
              <p className="text-5xl font-bold text-aqua mb-2">R$ 19,90</p>
              <p className="text-sm text-muted-foreground mb-6">Pagamento único • Acesso vitalício</p>
              
              {/* Lista de recursos */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">Método Desintoxicação Digital Kids</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">E-book: Atenção Plena em Família</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">Guia de Apps e Jogos Educativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">E-book: TDAH e Telas</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground line-through">Ferramentas de Auxílio Desintoxicação Digital</span>
                </li>
                
              </ul>
              
              <Button variant="aqua" className="w-full mb-4" size="lg">
                QUERO ESSA VERSÃO
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-aqua">
                <Shield className="w-5 h-5" />
                <p className="text-sm font-semibold">Garantia de 30 dias</p>
              </div>
            </Card>

            {/* Versão Premium */}
            <Card className="p-8 shadow-soft border-2 border-coral relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-bold">
                Recomendado
              </div>
              <div className="absolute top-12 right-4 bg-coral text-coral-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Crown className="w-4 h-4" />
                Mais Vendida e Completa
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground mt-12">Versão Premium</h3>
              
              {/* Preços */}
              <div className="mb-2">
                <span className="text-2xl text-muted-foreground line-through">R$ 89,90</span>
              </div>
              <p className="text-5xl font-bold text-coral mb-2">R$ 29,90</p>
              <p className="text-sm text-muted-foreground mb-6">Pagamento único • Acesso vitalício</p>
              
              {/* Lista de recursos */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">Método Desintoxicação Digital Kids</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">LIvro Digital: Atenção Plena em Família</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">Guia de Apps e Jogos Educativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">Livro Digital: TDAH e Telas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-foreground/90 font-semibold">Modo Foco: Ferramenta para Estudos e Atividades Sem Distrações</span>
                    <span className="bg-coral text-coral-foreground px-2 py-0.5 rounded text-xs font-bold">PREMIUM</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-foreground/90 font-semibold">Questionários de Progresso: Avalie a Evolução do Seu Filho Com o Método</span>
                    <span className="bg-coral text-coral-foreground px-2 py-0.5 rounded text-xs font-bold">PREMIUM</span>
                  </div>
                </li>
              </ul>
              
              <Button variant="coral" className="w-full mb-4 flex items-center justify-center gap-2" size="lg">
                <Zap className="w-5 h-5" />
                QUERO ESSA VERSÃO
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-coral mb-4">
                <Shield className="w-5 h-5" />
                <p className="text-sm font-semibold">Garantia de 30 dias</p>
              </div>
              
              {/* Banner de Urgência */}
              <div className="bg-coral/10 border-2 border-coral rounded-lg p-3 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-coral" />
                <p className="text-sm font-bold text-coral">Oferta por tempo limitado!</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground font-semibold mb-2">Isabella Centeno</p>
          <p className="text-muted-foreground mb-4">© 2024 Desintoxicação Digital Kids. Todos os Direitos Reservados.</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-4">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          </div>
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
            Este produto não garante resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;