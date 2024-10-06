import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const ticketsData = [
    {
      clientName: "Alice Johnson",
      status: "OPEN",
      messages: [
        { body: "Olá, estou tendo problemas para acessar minha conta. Aparece uma mensagem dizendo 'usuário não encontrado.'" },
        { body: "Oi Alice, obrigado por nos contatar. Você pode confirmar o e-mail que está utilizando para tentar o login?" },
        { body: "Sim, estou usando o e-mail alice.johnson@example.com. Sempre funcionou até hoje." },
        { body: "Entendido. Vamos verificar em nosso sistema. Você já tentou redefinir sua senha?" },
        { body: "Sim, mas não recebo o e-mail de redefinição." },
        { body: "Fizemos uma verificação e parece que houve uma alteração recente no e-mail cadastrado. Vamos enviar um link de recuperação para o e-mail anterior. Fique de olho na sua caixa de entrada." },
        { body: "Ok, vou aguardar. Obrigado pela ajuda!" },
        { body: "Acabamos de enviar o link de recuperação. Verifique se chegou, e qualquer dúvida, estamos à disposição." }
      ]
    },
    {
      clientName: "Bob Smith",
      status: "CLOSED",
      messages: [
        { body: "Olá, estou enfrentando problemas ao processar meu pagamento. Recebo um erro toda vez que tento finalizar a compra." },
        { body: "Oi Bob, sentimos muito por isso. Pode nos fornecer mais detalhes sobre o erro ou o método de pagamento utilizado?" },
        { body: "Estou usando cartão de crédito, e o erro que aparece é 'transação recusada'." },
        { body: "Entendido. Vamos investigar o problema e entraremos em contato em breve com uma solução." },
        { body: "Obrigado! Aguardo o retorno." },
        { body: "Bob, identificamos que o problema estava relacionado à validação do cartão no nosso sistema. A questão foi resolvida, e agora você pode tentar finalizar a compra novamente." },
        { body: "Perfeito, acabei de conseguir completar a compra. Obrigado pela ajuda!" },
        { body: "Ficamos felizes que o problema foi resolvido. Se precisar de mais alguma coisa, estamos à disposição. Tenha um ótimo dia!" }
      ]
    },
    {
      clientName: "Charlie Brown",
      status: "CLOSED",
      messages: [
        { body: "Olá, meu pedido foi enviado para o endereço errado. O que posso fazer para corrigir isso?" },
        { body: "Oi Charlie, sentimos muito pelo inconveniente. Vamos verificar o seu pedido. Pode nos confirmar o endereço correto?" },
        { body: "Claro, o endereço correto é 123 Main Street, Springfield." },
        { body: "Obrigado pela confirmação. Vamos entrar em contato com a transportadora para redirecionar o pacote para o endereço correto." },
        { body: "Agradeço! Espero que isso seja resolvido rapidamente." },
        { body: "Atualização: conseguimos redirecionar o pedido. Ele deve chegar ao endereço correto em 3 dias úteis." },
        { body: "Perfeito, muito obrigado pela ajuda!" },
        { body: "De nada, Charlie! Ficamos felizes em ajudar. Seu ticket está sendo encerrado, mas estamos à disposição se precisar de mais alguma coisa." }
      ]
    },
    {
      clientName: "Diana Prince",
      status: "OPEN",
      messages: [
        { body: "Olá, estou tentando alterar minha senha, mas não estou recebendo o e-mail de recuperação." },
        { body: "Oi Diana, obrigado por entrar em contato. Já verificamos e parece que o e-mail de recuperação foi enviado. Você poderia verificar sua caixa de spam?" },
        { body: "Verifiquei e não encontrei nada. Posso tentar redefinir a senha de outra forma?" },
        { body: "Claro! Podemos fazer a redefinição manualmente. Você pode me fornecer a nova senha que gostaria de usar?" },
        { body: "Sim, gostaria de usar a senha 'NovaSenha123!'" },
        { body: "Entendido. Vou redefinir sua senha para 'NovaSenha123!'. Um momento, por favor." },
        { body: "Feito! Sua senha foi alterada com sucesso. Você pode tentar fazer login agora." },
        { body: "Consegui! Muito obrigada pela ajuda rápida!" },
        { body: "De nada, Diana! Se precisar de mais assistência, estamos sempre à disposição." }
      ]
    },
    {
      clientName: "Edward Elric",
      status: "CLOSED",
      messages: [
        { body: "Olá, gostaria de saber sobre o status do meu reembolso. Já se passou uma semana desde que fiz o pedido." },
        { body: "Oi Edward, obrigado por nos contatar. Verificamos e seu reembolso foi processado e deve ser creditado em sua conta em até 5 dias úteis." },
        { body: "Obrigado pela atualização! Vou ficar de olho na minha conta." },
        { body: "De nada! Se precisar de mais assistência, não hesite em nos chamar." },
        { body: "Agradeço pela ajuda, o atendimento foi excelente!" },
        { body: "Ficamos felizes em ajudar, Edward! Seu ticket será encerrado agora. Tenha um ótimo dia!" }
      ]
    },
    {
      clientName: "Lucas Ribeiro",
      status: "CLOSED",
      messages: [
        { body: "Olá, recebi um produto com defeito. O que devo fazer?" },
        { body: "Oi Lucas, sentimos muito pelo inconveniente. Pode nos informar qual produto está com defeito?" },
        { body: "É o modelo XYZ123. A tela não liga." },
        { body: "Entendido. Podemos iniciar o processo de devolução. Você pode nos enviar uma foto do produto?" },
        { body: "Claro, vou enviar a foto agora." },
        { body: "Obrigado! Vamos processar sua devolução e você receberá um e-mail de confirmação em breve." },
        { body: "Recebi o e-mail. Quanto tempo levará para receber o reembolso?" },
        { body: "O reembolso será processado em até 7 dias úteis após a devolução ser recebida." },
        { body: "Perfeito! Agradeço pela ajuda rápida." }
      ]
    },
    {
      clientName: "Maria Santos",
      status: "CLOSED",
      messages: [
        { body: "Olá, gostaria de saber sobre a entrega do meu pedido. Ele ainda não chegou." },
        { body: "Oi Maria, lamento pela espera. Você pode me fornecer o número do seu pedido?" },
        { body: "Claro, meu número de pedido é 987654." },
        { body: "Verificando... Parece que o pedido foi enviado e está a caminho. A previsão de entrega é para amanhã." },
        { body: "Obrigada pela informação! Vou ficar de olho na entrega." },
        { body: "De nada! Se precisar de mais alguma coisa, é só avisar." },
        { body: "Agradeço pelo ótimo atendimento! Estou satisfeita com a resposta rápida." },
        { body: "Ficamos felizes em ajudar, Maria! Seu ticket será encerrado agora. Tenha um ótimo dia!" }
      ]
    },
    {
      clientName: "Fernando Almeida",
      status: "CLOSED",
      messages: [
        { body: "Olá, estou tendo problemas com a instalação do software que comprei. Não consigo ativar minha licença." },
        { body: "Oi Fernando, lamento saber disso. Você pode me informar qual erro está aparecendo?" },
        { body: "Recebo uma mensagem dizendo que a chave de ativação é inválida." },
        { body: "Vamos verificar isso. Pode nos enviar a chave de ativação que você está tentando usar?" },
        { body: "Claro, a chave é ABCD-1234-EFGH-5678." },
        { body: "Obrigado! Encontramos um erro de digitação na nossa base de dados. Vou gerar uma nova chave para você." },
        { body: "Ótimo, obrigado! Estou aguardando a nova chave." },
        { body: "Aqui está a nova chave: WXYZ-9876-QRST-5432. Tente ativar o software novamente." },
        { body: "Consegui ativar! Muito obrigado pela ajuda rápida." }
      ]
    },
    {
      clientName: "Sofia Costa",
      status: "CLOSED",
      messages: [
        { body: "Olá, fiz um pedido e gostaria de alterar o endereço de entrega. É possível?" },
        { body: "Oi Sofia, podemos ajudar com isso. Você pode me fornecer o número do seu pedido e o novo endereço?" },
        { body: "Meu número de pedido é 123456 e o novo endereço é Rua das Flores, 789." },
        { body: "Verificando... A alteração de endereço foi realizada com sucesso!" },
        { body: "Obrigada! Vou ficar atenta à entrega." },
        { body: "De nada! Se precisar de mais alguma coisa, estamos à disposição." },
        { body: "Agradeço pela ajuda rápida. O atendimento foi excelente!" },
        { body: "Ficamos felizes em ajudar, Sofia! Seu ticket será encerrado agora. Tenha um ótimo dia!" }
      ]
    },
    {
      clientName: "Gabriel Oliveira",
      status: "CLOSED",
      messages: [
        { body: "Olá, minha conta foi bloqueada e não consigo acessar meus dados." },
        { body: "Oi Gabriel, lamento pela inconveniência. Podemos ajudá-lo com isso. Pode me informar o motivo pelo qual sua conta foi bloqueada?" },
        { body: "Acredito que foi por causa de muitas tentativas de login sem sucesso." },
        { body: "Entendido. Precisamos verificar sua identidade para desbloquear sua conta. Pode confirmar seu e-mail associado?" },
        { body: "Sim, é gabriel.oliveira@example.com." },
        { body: "Obrigado! Estamos processando o desbloqueio agora. Um momento, por favor." },
        { body: "Pronto! Sua conta foi desbloqueada. Você já pode tentar fazer login novamente." },
        { body: "Consegui acessar! Muito obrigado pela ajuda!" },
        { body: "De nada, Gabriel! Se precisar de mais alguma coisa, é só avisar." }
      ]
    },
    {
      clientName: "Isabela Lima",
      status: "CLOSED",
      messages: [
        { body: "Olá, fiz um pedido, mas recebi o item errado. O que devo fazer?" },
        { body: "Oi Isabela, lamento pelo erro. Pode me informar o número do seu pedido?" },
        { body: "Claro, meu número de pedido é 654321." },
        { body: "Obrigado! Vamos iniciar o processo de devolução. Você pode nos enviar uma foto do item recebido?" },
        { body: "Sim, estou enviando a foto agora." },
        { body: "Recebido! Vamos enviar o item correto e fornecer uma etiqueta para a devolução." },
        { body: "Obrigada! Quanto tempo levará para receber o item correto?" },
        { body: "O novo item será enviado em até 3 dias úteis." },
        { body: "Perfeito! Agradeço pela ajuda e rapidez no atendimento." }
      ]
    },
    {
      clientName: "Ricardo Ferreira",
      status: "CLOSED",
      messages: [
        { body: "Olá, estou enfrentando dificuldades para fazer o download do meu recibo de pagamento." },
        { body: "Oi Ricardo, sinto muito por isso. Você pode me informar o número do seu pedido?" },
        { body: "Claro, o número do meu pedido é 321987." },
        { body: "Obrigado! Estamos verificando agora. Um momento, por favor." },
        { body: "Você pode tentar novamente? O recibo foi gerado e deve estar disponível para download." },
        { body: "Consegui baixar! Muito obrigado pela ajuda." },
        { body: "Fico feliz que tenha funcionado! Se precisar de mais alguma coisa, estamos aqui." },
        { body: "Agradeço pela agilidade no atendimento. Excelente serviço!" },
        { body: "Estamos sempre à disposição, Ricardo! Seu ticket será encerrado agora. Tenha um ótimo dia!" }
      ]
    },
    {
      clientName: "Natalia Torres",
      status: "CLOSED",
      messages: [
        { body: "Oi, minha assinatura foi renovada, mas não recebi a confirmação." },
        { body: "Olá Natalia, vamos verificar isso. Você pode me informar seu e-mail associado à conta?" },
        { body: "Sim, é natalia.torres@example.com." },
        { body: "Obrigado! Um momento enquanto verifico seu histórico." },
        { body: "Encontrei a renovação, o pagamento foi processado com sucesso. Você deve receber a confirmação em breve." },
        { body: "Perfeito! Agradeço pela ajuda rápida." },
        { body: "De nada! Se precisar de mais alguma coisa, é só avisar." },
        { body: "Agradeço pela atenção, o atendimento foi excelente!" },
        { body: "Ficamos felizes em ajudar, Natalia! Seu ticket será encerrado agora." }
      ]
    },
    {
      clientName: "André Martins",
      status: "CLOSED",
      messages: [
        { body: "Olá, estou com problemas para acessar o meu histórico de pedidos." },
        { body: "Oi André, sinto muito pelo inconveniente. Você pode me informar o e-mail associado à sua conta?" },
        { body: "Meu e-mail é andremartins@example.com." },
        { body: "Obrigado! Vou verificar sua conta. Um momento, por favor." },
        { body: "Encontramos um problema temporário, mas já estamos resolvendo. Tente acessar novamente." },
        { body: "Consegui acessar! Muito obrigado pela ajuda." },
        { body: "Fico feliz que tenha funcionado! Se precisar de mais alguma coisa, é só avisar." },
        { body: "Agradeço pela agilidade, o atendimento foi ótimo!" },
        { body: "Estamos sempre à disposição, André! Seu ticket será encerrado agora." }
      ]
    },
    {
      clientName: "Tatiane Rocha",
      status: "CLOSED",
      messages: [
        { body: "Olá, gostaria de saber sobre a política de devolução de produtos." },
        { body: "Oi Tatiane, claro! Podemos ajudar com isso. Você tem um produto específico em mente?" },
        { body: "Sim, comprei uma blusa que não serviu." },
        { body: "Entendido! Nossa política permite devoluções em até 30 dias após a compra. Você pode iniciar o processo pelo nosso site." },
        { body: "Ótimo! E como funciona o reembolso?" },
        { body: "O reembolso é processado em até 7 dias úteis após a devolução do produto." },
        { body: "Perfeito! Agradeço pela clareza nas informações." },
        { body: "De nada, Tatiane! Se precisar de mais alguma coisa, estamos aqui para ajudar." },
        { body: "O atendimento foi excelente, muito obrigada!" }
      ]
    },
    {
      clientName: "Felipe Santos",
      status: "CLOSED",
      messages: [
        { body: "Oi, comprei um produto e ainda não recebi o código de rastreamento." },
        { body: "Olá Felipe, sinto muito pela espera. Você pode me informar o número do seu pedido?" },
        { body: "Claro, meu número de pedido é 987654." },
        { body: "Obrigado! Um momento enquanto verifico o status do seu pedido." },
        { body: "O pedido foi enviado e o código de rastreamento é ABC123456." },
        { body: "Perfeito! Obrigado pela ajuda." },
        { body: "De nada! Se precisar de mais alguma coisa, é só avisar." },
        { body: "Agradeço pela rapidez no atendimento!" },
        { body: "Estamos sempre aqui para ajudar, Felipe! Seu ticket será encerrado agora." }
      ]
    },
    {
      clientName: "Laura Mendes",
      status: "CLOSED",
      messages: [
        { body: "Oi, estou tendo dificuldades para aplicar meu cupom de desconto." },
        { body: "Olá Laura, vamos resolver isso! Pode me dizer qual é o cupom que você está tentando usar?" },
        { body: "O cupom é DESCONTO20." },
        { body: "Verificando... O cupom deve estar válido, mas pode haver um problema de elegibilidade." },
        { body: "O que eu posso fazer para resolver?" },
        { body: "Tente aplicá-lo no checkout novamente. Caso não funcione, entre em contato conosco novamente." },
        { body: "Fiz isso e funcionou! Muito obrigada pela ajuda." },
        { body: "Fico feliz que tenha funcionado! Se precisar de mais assistência, estamos aqui." },
        { body: "Agradeço pelo atendimento rápido e eficiente!" }
      ]
    },
    {
      clientName: "Carlos Silva",
      status: "CLOSED",
      messages: [
        { body: "Olá, meu pedido chegou danificado. O que posso fazer?" },
        { body: "Oi Carlos, lamento saber disso. Você pode me informar o número do seu pedido?" },
        { body: "O número do meu pedido é 123456." },
        { body: "Obrigado! Vamos iniciar o processo de devolução. Pode me enviar uma foto do item danificado?" },
        { body: "Claro, estou enviando a foto agora." },
        { body: "Recebido! Vamos providenciar a troca do item e enviar um novo para você." },
        { body: "Quanto tempo levará para receber o novo item?" },
        { body: "O novo item será enviado em até 5 dias úteis." },
        { body: "Perfeito! Agradeço pela assistência." }
      ]
    },
    {
      clientName: "Priscila Almeida",
      status: "CLOSED",
      messages: [
        { body: "Olá, gostaria de saber sobre as opções de envio disponíveis." },
        { body: "Oi Priscila, temos várias opções de envio. Você tem alguma preferência?" },
        { body: "Estou interessada em envio expresso. Qual é o tempo estimado?" },
        { body: "O envio expresso leva de 1 a 2 dias úteis." },
        { body: "Ótimo! E quanto custa?" },
        { body: "O custo do envio expresso depende do peso do pacote, mas varia entre R$ 20 e R$ 50." },
        { body: "Certo, obrigada! Isso me ajuda bastante." },
        { body: "De nada! Se precisar de mais informações, é só me avisar." },
        { body: "Agradeço pelo atendimento rápido e eficiente!" }
      ]
    },
    {
      clientName: "Júlio César",
      status: "CLOSED",
      messages: [
        { body: "Olá, gostaria de cancelar minha assinatura." },
        { body: "Oi Júlio, sinto muito em saber disso. Você poderia me informar o motivo do cancelamento?" },
        { body: "Não estou utilizando o serviço como esperava." },
        { body: "Entendo, obrigado pelo feedback. Vamos proceder com o cancelamento." },
        { body: "E quanto tempo leva para o cancelamento ser efetivado?" },
        { body: "O cancelamento é processado imediatamente e você receberá uma confirmação por e-mail." },
        { body: "Perfeito! Agradeço pela agilidade." },
        { body: "De nada! Se precisar de mais alguma coisa, estamos aqui." },
        { body: "Atendimento excelente, obrigado!" }
      ]
    },
    {
      clientName: "Renata Oliveira",
      status: "CLOSED",
      messages: [
        { body: "Olá, meu produto chegou com um acessório faltando." },
        { body: "Oi Renata, sinto muito por isso. Você pode me informar qual acessório está faltando?" },
        { body: "O carregador não veio junto com o produto." },
        { body: "Entendido! Vamos enviar o carregador para você imediatamente." },
        { body: "Qual é o prazo de entrega para o carregador?" },
        { body: "O carregador será enviado em até 3 dias úteis." },
        { body: "Obrigada pela ajuda rápida!" },
        { body: "De nada! Se precisar de mais alguma coisa, é só avisar." },
        { body: "Agradeço pela eficiência do atendimento!" }
      ]
    },
    {
      clientName: "Renata Oliveira",
      status: "CLOSED",
      messages: [
        { body: "Olá, meu produto chegou com um acessório faltando." },
        { body: "Oi Renata, sinto muito por isso. Você pode me informar qual acessório está faltando?" },
        { body: "O carregador não veio junto com o produto." },
        { body: "Entendido! Vamos enviar o carregador para você imediatamente." },
        { body: "Qual é o prazo de entrega para o carregador?" },
        { body: "O carregador será enviado em até 3 dias úteis." },
        { body: "Obrigada pela ajuda rápida!" },
        { body: "De nada! Se precisar de mais alguma coisa, é só avisar." },
        { body: "Agradeço pela eficiência do atendimento!" }
      ]
    },
    {
      clientName: "Bianca Lima",
      status: "CLOSED",
      messages: [
        { body: "Olá, meu pedido chegou com a embalagem danificada." },
        { body: "Oi Bianca, lamento saber disso. O produto em si está em bom estado?" },
        { body: "Sim, o produto está ok, mas a embalagem estava rasgada." },
        { body: "Entendido! Vamos registrar sua reclamação sobre a embalagem." },
        { body: "Preciso fazer alguma coisa para formalizar?" },
        { body: "Não, está tudo certo. Apenas estamos documentando o caso." },
        { body: "Obrigado pela assistência. Isso ajuda a melhorar o serviço!" },
        { body: "Com certeza! Agradecemos seu feedback." },
        { body: "Estarei mais atenta na próxima compra." }
      ]
    },
    {
      clientName: "André Costa",
      status: "CLOSED",
      messages: [
        { body: "Oi, gostaria de saber como posso trocar um item que comprei." },
        { body: "Olá André, claro! Qual item você gostaria de trocar?" },
        { body: "Comprei uma camiseta, mas ela não serve." },
        { body: "Entendi! Você pode nos enviar o número do pedido?" },
        { body: "O número do pedido é 321654." },
        { body: "Obrigado! Para iniciar a troca, você precisará enviar o item de volta." },
        { body: "Qual é o prazo para o envio?" },
        { body: "Você tem até 30 dias para enviar o item de volta." },
        { body: "Perfeito! Farei isso amanhã." },
        { body: "Ótimo! Assim que recebermos o item, faremos a troca." }
      ]
    },
    {
      clientName: "Gabriela Martins",
      status: "CLOSED",
      messages: [
        { body: "Oi, comprei um item que ainda não chegou. Pode verificar?" },
        { body: "Olá Gabriela, claro! Você pode me informar o número do seu pedido?" },
        { body: "O número do pedido é 789012." },
        { body: "Verificando... O pedido foi enviado, mas parece que está com atraso na entrega." },
        { body: "O que posso fazer nesse caso?" },
        { body: "Você pode esperar mais alguns dias ou podemos iniciar uma reclamação com a transportadora." },
        { body: "Vamos iniciar a reclamação, por favor." },
        { body: "Certo, faremos isso agora. Você receberá um e-mail com as atualizações." },
        { body: "Obrigada pela ajuda! Fico no aguardo." },
        { body: "De nada! Se precisar de mais alguma coisa, estamos aqui." }
      ]
    },
    {
      clientName: "Thiago Rocha",
      status: "CLOSED",
      messages: [
        { body: "Olá, gostaria de saber sobre a política de devolução." },
        { body: "Oi Thiago, nossa política de devolução permite que você devolva produtos em até 30 dias." },
        { body: "E preciso que o produto esteja na embalagem original?" },
        { body: "Sim, é necessário que o produto esteja na embalagem original e sem sinais de uso." },
        { body: "Certo, estou pensando em devolver um item que comprei." },
        { body: "Qual item você gostaria de devolver?" },
        { body: "É uma mochila que não atendeu às minhas expectativas." },
        { body: "Entendido! Vamos iniciar o processo de devolução." },
        { body: "Perfeito! Quais são os próximos passos?" },
        { body: "Vou enviar um e-mail com as instruções detalhadas." }
      ]
    },
    {
      clientName: "Cláudia Souza",
      status: "CLOSED",
      messages: [
        { body: "Oi, estou tendo problemas para finalizar minha compra." },
        { body: "Olá Cláudia, posso ajudar! Qual é o problema que você está enfrentando?" },
        { body: "Quando clico em 'finalizar compra', a página não carrega." },
        { body: "Entendo, isso pode ser frustrante. Você pode tentar limpar o cache do navegador?" },
        { body: "Já fiz isso e o problema persiste." },
        { body: "Certo, vamos tentar usar outro navegador ou dispositivo." },
        { body: "Isso funcionou! Consegui finalizar a compra." },
        { body: "Ótimo! Fico feliz em saber que funcionou." },
        { body: "Agradeço pela ajuda rápida!" },
        { body: "De nada, Cláudia! Se precisar de mais alguma coisa, é só avisar." }
      ]
    },
    {
      clientName: "Marcos Almeida",
      status: "CLOSED",
      messages: [
        { body: "Olá, preciso de ajuda com um desconto que não foi aplicado." },
        { body: "Oi Marcos, qual desconto você esperava aplicar?" },
        { body: "Era um desconto de 20% na minha compra." },
        { body: "Você pode me informar o código do desconto?" },
        { body: "O código é DESCONTO20." },
        { body: "Verificando... O código expirou na semana passada." },
        { body: "Puxa, não percebi isso. Posso receber outro desconto?" },
        { body: "Podemos aplicar um desconto de 10% na sua próxima compra." },
        { body: "Isso seria ótimo! Obrigado pela ajuda!" },
        { body: "De nada! O desconto será enviado por e-mail." }
      ]
    }
  ];

  for (const ticketData of ticketsData) {
    try {
      const ticket = await prisma.ticket.create({
        data: {
          clientName: ticketData.clientName,
          status: ticketData.status,
          messages: {
            create: ticketData.messages,
          },
        },
      });
      console.log(`Ticket criado:`, ticket);
    } catch (error) {
      console.error(`Erro ao criar ticket para ${ticketData.clientName}:`, error);
    }
  }
}

main()
  .catch((e) => {
    console.error("Erro ao executar a função main:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
