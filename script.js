
let fotos = [
  "imagens/buddy.jpeg",
  "imagens/bob.jpeg",
  "imagens/cereja.jpeg",
  "imagens/amora.jpeg"
];
let indice = 0;

function trocarFoto() {
  indice = (indice + 1) % fotos.length;
  document.getElementById("fotoCachorro").src = fotos[indice];
}
const paginas = {
  inicio: `
    <section>
      <h1>🐶 Bem-vindo à ONG Amigão!</h1>
      <h2>Quem Somos</h2>
      <p>Na Ong Amigão, acreditamos que todo animal merece amor, cuidado e um lar seguro. Somos uma organização sem fins lucrativos dedicada ao resgate, reabilitação e adoção de animais em situação de abandono, maus-tratos ou vulnerabilidade.</p>
      <p>Para conhecer mais sobre nossos projetos, clique <button onclick="navegar('projetos')">aqui</button></p>
      <img src="imagens/cachorro.jpg" alt="Voluntários em ação" style="width:100%; max-width:500px; border-radius:12px; margin-top:10px;">
    </section>

    <section>  
      <h2>Missão da ONG</h2>
      <p>❤️Promover o resgate, acolhimento e reabilitação de animais em situação de abandono ou maus-tratos, oferecendo cuidados essenciais, abrigo temporário e muito amor.</p>
    </section>

    <section>
      <h2>Contato com ONG Amigão</h2>
      <address>
        <p>Endereço: Rua Jabuti, 123 - Bairro Santa Felicidade - Curitiba/PR</p>
        <p>☎️Telefone: (41) 4002-8922</p>
        <p>✉️Email: contato@ongamigao.org.br</p>
      </address>
    </section>
  `,

  projetos: `
    <section>
      <h1>ONG Amigão</h1>
      <h2>📌 Nosso Projeto</h2>
      <p>A ONG Amigão é uma organização dedicada ao resgate, proteção e reabilitação de animais em situação de abandono ou maus-tratos.</p>

      <hr><br>

      <h2>🎄 Campanha de Natal</h2>
      <p>“Natal de Patinhas” é uma campanha solidária que busca levar carinho, cuidados e esperança aos animais resgatados que ainda esperam por um lar.</p>
      <div style="text-align: center;">
        <img src="imagens/buddy.jpeg" alt="Cão em ensaio de natal" style="width: 150px; margin: 10px; border-radius: 8px;">
        <img src="imagens/bob.jpeg" alt="cachorro com a coberta na cabeça" style="width: 150px; margin: 10px; border-radius: 8px;">
        <img src="imagens/cereja.jpeg" alt="Cachorro mordendo um brinquedo em forma de picolé" style="width: 150px; margin: 10px; border-radius: 8px;">
        <img src="imagens/amora.jpeg" alt="Cachorro com roupinha" style="width: 150px; margin: 10px; border-radius: 8px;">
      </div>

      <hr><br>

      <h2>📒 Projeto Educacional</h2>
      <p>“Educar para Cuidar” leva palestras, oficinas e atividades interativas a escolas e comunidades, ensinando sobre respeito aos animais e guarda responsável.</p>

      <hr><br>

      <h2>Contato com a ONG Amigão</h2>
      <address>
        <p>Endereço: Rua Jabuti, 123 - Bairro Santa Felicidade - Curitiba/PR</p>
        <p>☎️ Telefone: (41) 4002-8922</p>
        <p>✉️ Email: contato@ongamigao.org.br</p>
      </address>
    </section>
  `,

  cadastro: `
    <section>
      <h1>💰 Seja um doador</h1>
      <form id="formDoador">
        <label for="nomeDoador">Nome:</label><br>
        <input type="text" id="nomeDoador"><br>
        <label for="emailDoador">Email:</label><br>
        <input type="email" id="emailDoador"><br>
        <label for="telefoneDoador">Telefone:</label><br>
        <input type="tel" id="telefoneDoador"><br>
        <button type="submit">Enviar</button>
      </form>
      <p id="mensagemDoador" style="color: green;"></p>
    </section>

    <hr><br>

    <section>
      <h1>🤝 Seja um voluntário</h1>
      <form id="formVoluntario">
        <label for="nomeVoluntario">Nome:</label><br>
        <input type="text" id="nomeVoluntario"><br>
        <label for="emailVoluntario">Email:</label><br>
        <input type="email" id="emailVoluntario"><br>
        <label for="telefoneVoluntario">Telefone:</label><br>
        <input type="tel" id="telefoneVoluntario"><br>
        <button type="submit">Enviar</button>
      </form>
      <p id="mensagemVoluntario" style="color: green;"></p>
    </section>
  `
};

function navegar(pagina) {
  document.getElementById("conteudo").innerHTML = paginas[pagina];
  if (pagina === "cadastro") {
    ativarValidacaoDoador();
    ativarValidacaoVoluntario();
  }
}

function ativarValidacaoDoador() {
  const form = document.getElementById("formDoador");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById("nomeDoador").value.trim();
      const email = document.getElementById("emailDoador").value.trim();
      const telefone = document.getElementById("telefoneDoador").value.trim();

      if (!nome || !email || !telefone) {
        alert("Preencha todos os campos do formulário de doador.");
      } else {
        document.getElementById("mensagemDoador").textContent = "Obrigado por sua doação!";
        form.reset();
      }
    });
  }
}

function ativarValidacaoVoluntario() {
  const form = document.getElementById("formVoluntario");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById("nomeVoluntario").value.trim();
      const email = document.getElementById("emailVoluntario").value.trim();
      const telefone = document.getElementById("telefoneVoluntario").value.trim();

      if (!nome || !email || !telefone) {
        alert("Preencha todos os campos do formulário de voluntário.");
      } else {
        document.getElementById("mensagemVoluntario").textContent = "Obrigado por querer ser voluntário!";
        form.reset();
      }
    });
  }
}

// Carrega a página inicial ao abrir
document.addEventListener("DOMContentLoaded", () => {
  navegar("inicio");
});
