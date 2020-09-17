import React from 'react';
import cropped from './assets/cropped-viv_icon-500px.png';
import cropped1 from './assets/windows-white-logo.png';
import video0 from './assets/vivaldi_loop.mp4';
import cropped2 from './assets/vivaldi-tracker-blocker.webp';
import cropped3 from './assets/vivaldi-ad-blocker.webp';
import cropped4 from './assets/sync-encryption.webp';
import cropped5 from './assets/power-to-your-tabs.webp';
import arrow0 from './assets/arrow-left.svg';
import arrow1 from './assets/arrow-right.svg';
import review0 from './assets/Brendan_Hesse_sm.jpg';
import cropped6 from './assets/vivaldi-sidebar.webp';
import cropped7 from './assets/vivaldi-keyboard-shortcuts.webp';
import cropped8 from './assets/vivaldi-quickcommands.webp';
import cropped9 from './assets/vivaldi-notes.webp';
import cropped10 from './assets/vivaldi-darkmode.webp';
import cropped11 from './assets/picture-in-picture.webp';
import cropped12 from './assets/browser-extensions.webp';
import cropped13 from './assets/vivaldi-screenshots.webp';
import cropped14 from './assets/instagram-panel.webp';
import cropped15 from './assets/vivaldi-for-android.webp';
import cropped16 from './assets/Vivaldi-team.webp';
import cropped17 from './assets/community.webp';
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { 
            name: '', pass: '', passc: '', idInput: '', job:'', name:'', description:'', itemLevel:'', namelog:'', passlog:''};
    }
   
    cadastrar() {
        
        if((this.state.name=='')||(this.state.pass=='')||(this.state.passc=='')){
            alert("Preencha os campos corretamente");
        }else{
            if(this.state.pass!=this.state.passc ){
                alert("Senhas não condizentes");
            } else{
                const user={
                    nome:this.state.name,
                    senha: this.state.pass
                }
                const userString = JSON.stringify(user);
                alert("Cadastro realizado!");
                localStorage.setItem('5', userString);

            }   
        }
        
        
        this.setState((state) =>{
            return {
                name: '',
                pass: '',
                passc: ''
            }
        });
    }

    logar(){
        var i;
        var check=false;
        for (i=0; i<localStorage.length;i++){
            const ver =localStorage.getItem(i);
            const verif = JSON.parse(ver);

           
                if((this.state.namelog==verif.nome)&&(this.state.passlog==verif.senha)){
                alert("Login feito");
                check=true;
               
                }
            

        }
        if((this.state.namelog=='')||(this.state.passlog=='')){
            alert("Preencha os campos corretamente");
        }
        else{
            if (check==false){
                alert("Nome ou Senha incorretos.");
           
            
            }
        }
        
        this.setState((state) =>{
            return {
                namelog: '',
                passlog: ''
            }
        });
    }

    

    handle_change(ev) {
        this.setState({ name: ev.target.value });

    }

    handle_change2(ev) {

        this.setState({ pass: ev.target.value });
    }

    handle_change3(ev) {

        this.setState({ passc: ev.target.value });
    }

    handle_change_log(ev){
        this.setState({namelog: ev.target.value})
    }

    handle_change_log2(ev){
        this.setState({passlog: ev.target.value})
    }

    mudarEstado(ev) {
        this.setState({
            idInput: ev.target.value
        });
    };

    IDSearch() {
        const axios = require('axios');
        var valor = this.state.idInput;
        axios.get('https://xivapi.com/item/' + valor + "?columns=Name,Description,LevelItem,ClassJobCategory.Name")
            .then(((response) => {
                this.setState({
                    job: response.data.ClassJobCategory.Name,
                    name: response.data.Name,
                    description: response.data.Description,
                    itemLevel: response.data.LevelItem,
                });
            }));
    };



    render() {
        return (
            <div className="wrapper">
                <body class="homepage">
                    <div class="viheader row">
                        <a href="index.html">
                            <img src={cropped} alt="Logo do Vivaldi" class="logotop" />
                        </a>
                        <ul id="headeritems">
                            <li id="desktop">
                                <a href="">
                                    <h4 class="fontcolorred">Desktop</h4>
                                </a>
                            </li>
                            <li id="movel">
                                <a href="">
                                    <h4 class="fontcolorgray">Móvel</h4>
                                </a>
                            </li>
                            <li id="news">
                                <a href="">
                                    <h4 class="fontcolorgray">Notícias</h4>
                                </a>
                            </li>
                            <li id="help">
                                <a href="">
                                    <h4 class="fontcolorgray">Ajuda</h4>
                                </a>
                            </li>
                            <li id="community">
                                <a href="">
                                    <h4 class="fontcolorgray">Comunidade</h4>
                                </a>
                            </li>
                            <li id="about">
                                <a href="">
                                    <h4 class="fontcolorgray">Sobre</h4>
                                </a>
                            </li>
                        </ul>
                        <button id="buttondownload" class="dlbutton">
                            <h4>Download</h4>
                        </button>
                        <Popup trigger={
                            <button class="login">
                                <h4>Pesquisar</h4>
                            </button>} modal>
                            <span class="popspanSearch">
                                <div class="popdivSearch">
                                    <h1>Pesquisar por item</h1>
                                    <div class="APIContainerDiv">
                                        <input type="text" id="searchInput" placeholder="ID do item..." class="popSearchBar" value={this.state.idInput} onChange={this.mudarEstado.bind(this)} />
                                        <button onClick={this.IDSearch.bind(this)} class="popSearchButton"><h4>Pesquisar</h4></button>
                                    </div>
                                    <div class="popdivResults">
                                        <h2>Job: <span>{this.state.job}</span></h2>
                                        
                                        <h2>Nome: <span>{this.state.name}</span></h2>
                                        
                                        <h2>Descrição: <span>{this.state.description}</span></h2>
                                        
                                        <h2>Nível: <span>{this.state.itemLevel}</span></h2>
                                        
                                    </div>

                                </div>
                            </span>
                        </Popup>
                        <Popup trigger={
                            <button class="login" >
                                <h4>Login</h4>
                            </button>} modal>
                            <span id="popspan"class="popspan">
                                <div class="popdiv1">
                                    <h1>Entrar</h1>
                                    <input type="text" placeholder="Nome" class="inlogin" value={this.state.namelog} onChange={this.handle_change_log.bind(this)} />
                                    <input type="password" placeholder="Senha" class="inlogin" value={this.state.passlog} onChange={this.handle_change_log2.bind(this)}  />
                                    <button class="log" onClick={this.logar.bind(this)}><h4>Logar</h4></button>
                                </div>
                                <div class="popdiv2">
                                    <h1>Cadastre-se</h1>
                                    <input type="text" placeholder="Nome" class="inlogin" value={this.state.name} onChange={this.handle_change.bind(this)} />
                                    <input type="password" placeholder="Senha" class="inlogin" value={this.state.pass} onChange={this.handle_change2.bind(this)} />
                                    <input type="password" placeholder=" Confirmar Senha" class="inlogin" value={this.state.passc} onChange={this.handle_change3.bind(this)} />
                                    <button class="log" onClick={this.cadastrar.bind(this)}><h4>Cadastrar</h4></button>
                                </div>

                            </span>

                        </Popup>

                    </div>
                    <div class="navbarborder">
                        <div class="infomainbackground1">
                        <div class="infomainbackground2">
                            <main class="infomain">
                                
                                    <div id="intro" class="introinfo">
                                        <div class="divintro">
                                            <div>
                                                <h2 class="divintrostyle">V I V A L D I    B R O W S E R</h2>
                                            </div>
                                            <div>
                                                <h1>
                                                    0 rastreamento.
                                                    <br />
                                                    Um milhão de formas de personalizar tudo.
                                                </h1>
                                            </div>
                                            <div>
                                                <h3>Vivaldi é um novo navegador que te protege de rastreadores, bloqueia propagandas indesejáveis e te coloca no controle com recursos nativos únicos. Baixe o Vivaldi e navegue com rapidez.</h3>
                                            </div>
                                            <div class="divintrobutton">
                                                <button class="buttonalignement">
                                                    <img src={cropped1} alt="Logo Windows" class="buttonlogo1" />
                                                    <p class="buttontext1">Baixar Vivaldi</p>
                                                </button>
                                            </div>
                                            <div class="divintrolink">
                                                <a href="">Também disponível para Android</a>
                                            </div>
                                            <video autoplay controls class="introvideo">
                                                <source src={video0} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                
                                    
                                    <div id="firstinfo" class="firstinfo">
                                        <div class="firstinfo1">
                                            <div>
                                                <img src={cropped2} alt="Bloqueador de trackers" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Proteção contra
                                                    <em class="fontcolorred">rastreadores</em>
                                                </h2>
                                                <p>
                                                    Vivaldi bloqueia sites de te rastrear ao redor da internet, para você poder navegar em particular, porque privacidade online é tão importante quanto segurança.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="firstinfo2">
                                            <div>
                                                <img src={cropped3} alt="Adblock integrado" />
                                            </div>
                                            <div>
                                                <h2>
                                                    <em class="fontcolorblue">Bloqueador de anúncios</em>
                                                    integrado
                                                </h2>
                                                <p>
                                                    Vivaldi te oferece a opção de bloquear anúncios diretamente no navegador - não são necessárias extensões. Bloqueie todos os anúncios ou ajuste por site.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="firstinfo3">
                                            <div>
                                                <img src={cropped4} alt="Encriptação e Sync" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Sincronização segura com
                                                    <em class="fontcoloryellow">encriptação ponto-a-ponto</em>
                                                    integrado
                                                </h2>
                                                <p>
                                                    Sincronize seus Favoritos, senhas, extensões e muito mais, em todos os seus dispositivos. Os dados são encriptados no seu dispositivo usando uma senha que nunca é enviada a nós.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="firstinfo4">
                                            <div>
                                                <img src={cropped5} alt="Abas do Vivaldi" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Agrupamento de abas,
                                                    <em class="fontcolorblue">abas em mosaico</em>
                                                    e abas verticais
                                                </h2>
                                                <p>
                                                    Faça com que as abas sejam funcionais para você! Vivaldi te dá controle total sobre como você agrupa, visualiza e interage com suas abas. Selecione algumas abas e aplique comandos a todas de uma vez, visualize abas lado-a-lado ou na vertical, agrupe-as e muito mais.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="pressdiv" class="pressdiv">
                                        <div class="pressdivtop">
                                            <h2>O QUE OS OUTROS DIZEM SOBRE O VIVALDI</h2>
                                        </div>
                                        <div class="pressdivmiddle">
                                            <a href="">
                                                <img src={arrow0} alt="seta-esquerda" class="buttonReview" />
                                            </a>
                                            <p class="large">Eu definitivamente recomendo sincronizar esta versão com a versão para PC se você quer a melhor experiência Vivaldi.</p>
                                            <a href="">
                                                <img src={arrow1} alt="seta-direita" class="buttonReview" />
                                            </a>
                                        </div>
                                        <div class="pressdivbottom">
                                            <img src={review0} alt="Reviewer do Lifehacker" />
                                            <p class="paragraphreview">
                                                Brendan Hesse
                                                <br />
                                                <em class="fontcolorgray">Lifehacker</em>
                                            </p>
                                        </div>
                                    </div>

                                    <div id="secondinfo" class="secondinfo">
                                        <div class="secondinfo1">
                                            <div>
                                                <img src={cropped6} alt="Sidebar do Vivaldi" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Sites e apps favoritos no
                                                    <em class="fontcolorgreen">painel lateral</em>
                                                </h2>
                                                <p>
                                                    Tenha acesso rápido aos seus aplicativos de chat favoritos, redes sociais e sites de notícias. Adicione quantos você desejar ao seu painel lateral e reorganize-os como desejar, clicando e arrastando.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="secondinfo2">
                                            <div>
                                                <img src={cropped7} alt="Atalhos de teclado" />
                                            </div>
                                            <div>
                                                <h2>
                                                    <em class="fontcolorblue">Atalhos de teclado</em>
                                                    personalizados
                                                </h2>
                                                <p>
                                                    Use seu teclado para navegar mais rápido! Personalize seus atalhos de teclado, habilite atalhos de tecla única para acessar ainda mais rápido seus comandos e conteúdos favoritos.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="secondinfo3">
                                            <div>
                                                <img src={cropped8} alt="Comandos e gestos" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Comandos rápidos
                                                </h2>
                                                <p>
                                                    Controle tudo de um lugar. Você vai amar! Use a pesquisa universal do Vivaldi para encontrar determinadas abas abertas, favoritos, entradas no seu histórico de navegação e muito mais.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="secondinfo4">
                                            <div>
                                                <img src={cropped9} alt="Anotações" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Gerenciador de
                                                    <em class="fontcoloryellow">notas</em>
                                                </h2>
                                                <p>
                                                    Escreva suas idéias no painel lateral do navegador usando Notas. Formate o texto usando Markdown, anexe capturas de tela automaticamente, e muito mais.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="secondinfo5">
                                            <div>
                                                <img src={cropped10} alt="Modo obscuro" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Escuro ou claro
                                                </h2>
                                                <p>
                                                    Aproveite o tema escuro predefinido ou crie um novo do zero. Vivaldi pode até se adaptar ao tema do seu sistema operacional, alternando automaticamente entre os modos claro e escuro.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="secondinfo6">
                                            <div>
                                                <img src={cropped11} alt="Picture in picture" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Vídeo
                                                    <em class="fontcolorblue"> flutuante</em>
                                                </h2>
                                                <p>
                                                    Mantenha vídeos flutuando acima de outras janelas e aplicações. A opção de vídeo flutuante (PiP ou imagem-sobre-imagem) permite continuar assistindo seu vídeo enquanto navega por outras abas.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="extension" class="extension">
                                        <div class="extensiontop">
                                            <h2>
                                                <em class="fontcolorred">
                                                    Extensões
                                                </em>
                                                    do Chrome
                                            </h2>
                                        </div>
                                        <div class="extensionbottom">
                                            <p>
                                                Embora o Vivaldi possa ser totalmente personalizado, sempre pode haver alguma funcionalidade que você queira acrescentar. Extensões da Chrome WebStore funcionam no navegador Vivaldi!
                                            </p>
                                        </div>
                                        <div class="extensionbottom">
                                            <img src={cropped12} alt="Extensões do navegador" />
                                        </div>
                                    </div>

                                    <div id="thirdinfo" class="thirdinfo">
                                        <div class="thirdinfo1">
                                            <div>
                                                <img src={cropped13} alt="Screenshots pelo navegador" />
                                            </div>
                                            <div>
                                                <h2>
                                                    <em class="fontcolorblue">Captura de tela</em>
                                                    de página inteira
                                                </h2>
                                                <p>
                                                    Faça capturas de páginas inteiras ou apenas da área visível na tela, utilizando a ferramenta de Captura do Vivaldi. Compartilhe ou salve o que estiver na sua tela facilmente.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="thirdinfo2">
                                            <div>
                                                <img src={cropped14} alt="Side panel do Instagram" />
                                            </div>
                                            <div>
                                                <h2>
                                                    Publique no seu
                                                    <em class="fontcolorred">Instagram</em>
                                                    à partir do seu computador
                                                </h2>
                                                <p>
                                                    Publique no Instagram, do seu computador, sem alterar definições ou baixar extensões.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="mobile" class="mobilediv">
                                        <div>
                                            <img src={cropped15} alt="Vivaldi para Androide" />
                                        </div>
                                        <div>
                                            <h2>
                                                Navegue no celular com Vivaldi
                                            </h2>
                                            <p>
                                                Com bloqueador de anúncios integrado, proteção contra rastreadores, sistema único de abas igual ao do computador, sincronização encriptada, e muitas outras funcionalidades integradas úteis, o Vivaldi para Android é feito para você.
                                            </p>
                                            <button>
                                                Vivaldi para Android
                                            </button>
                                        </div>
                                    </div>
                                    <div id="fourthinfo" class="forthinfo">
                                        <div>
                                            <img src={cropped16} alt="Time do Vivaldi" />
                                        </div>
                                        <div class="forthinfo1">
                                            <h2>
                                                No que
                                                <em class="fontcolorgreen">acreditamos</em>
                                            </h2>
                                            <p>
                                                A Vivaldi pertence aos seus funcionários. E planejamos continuar assim.
                                            <br />
                                                Não ter investidores externos nos dá a liberdade para escutar nossos usuários e, junto a eles, desenvolver o navegador que eles merecem. Nós não rastreamos você e nunca venderemos seus dados.
                                            </p>
                                            <button>
                                                No que acreditamos
                                            </button>
                                        </div>
                                    </div>
                                    <div id="community" class="community">
                                        <div class="communityicon">
                                            <img src={cropped17} alt="Logo da comunidade" />
                                        </div>
                                        <div class="communitypadding">
                                            <h2>
                                                Junte-se à <em class="fontcolorblue">comunidade</em> Vivaldi
                                            </h2>
                                            <p>
                                                Nossa comunidade é utilizada por milhares de pessoas todos os dias. Molde o desenvolvimento do Vivaldi, obtenha ajuda sobre o navegador, compartilhe dicas e truques, e converse com pessoas com interesses em comum.
                                            </p>
                                            <button>
                                                Junte-se à nossa comunidade
                                            </button>
                                        </div>
                                    </div>

                                    <div id="get" class="getdiv">
                                        <div class="getdiv1">
                                            <h2>
                                                Pronto para experimentar o Vivaldi?
                                            </h2>
                                        </div>
                                        <div class="bottombutton">
                                            <button class="buttonalignement">
                                                <img src={cropped1} alt="Logo Windows" class="buttonlogo1" />
                                                <p class="buttontext1">Baixar Vivaldi</p>
                                            </button>
                                        </div>
                                    </div>

                                </main>
                                </div>
                                </div>
                            <footer>
                                <div id="footcontainer" class="footcontainer">
                                    <div id="subscribenewsletter" class="footcontainerstyling">
                                        <a href="">Inscreva-se no nosso boletim informativo</a>
                                    </div>
                                    <div id="quicklinks" class="quicklinks">
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="">Desktop</a>
                                                </li>
                                                <br />
                                                <br />
                                                <li>
                                                    <a href="">Baixar Vivaldi</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Funcionalidades</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Gerenciamento de Abas</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Interface de Usuário</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Personalização</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Navegação</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Mouse & Teclado</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Privacidade & Segurança</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Ferramentas</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="">Móvel</a>
                                                </li>
                                                <br />
                                                <br />
                                                <li>
                                                    <a href="">Vivaldi para Android</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="">Notícias</a>
                                                </li>
                                                <br />
                                                <br />
                                                <li>
                                                    <a href="">Blog Vivaldi</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Snapshots</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Cobertura da Imprensa</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Comunicados da Imprensa</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="">Ajuda</a>
                                                </li>
                                                <br />
                                                <br />
                                                <li>
                                                    <a href="">Página de Ajuda do Vivaldi</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Fórum</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Para Começar</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Tutoriais</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Reportar um problema</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Contato</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="">Comunidade</a>
                                                </li>
                                                <br />
                                                <br />
                                                <li>
                                                    <a href="">Blogs</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Fórum</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Webmail</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Material Promocional</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Banners</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Sobre</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="">Sobre</a>
                                                </li>
                                                <br />
                                                <br />
                                                <li>
                                                    <a href="">No Que Acreditamos</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Nós não te rastreamos</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Privacidade & Termos</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Segurança</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Nosso Time</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Empregos</a>
                                                </li>
                                                <br />
                                                <li>
                                                    <a href="">Imprensa</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="trademarks" class="trademarks">
                                        <img src={cropped} alt="Logo do Vivaldi" class="footerlogostyling" />
                                        <p class="footerparagraphstyling">© Vivaldi Technologies™ — Todos os direitos reservados.</p>
                                    </div>
                                </div>
                            </footer>
                        
                    </div>
                </body>
            </div>
        );
    }
}

export default App;