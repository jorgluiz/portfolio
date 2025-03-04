import ImgProvider from "./ui/components/contexts/fullScreen"; // API context

// sistema de rotas faz chaveamento entra as páginas, em função da URL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LayoutGrid from "./ui/components/layout/gridLayout";

import { LayoutBackend } from "./ui/components/backend/layout"; //template-grid (backend)
import BackendHome from "./pages/backend/backendHome";
import SugestoesGerais from "./pages/backend/sugestoesGerais";
import PassarDadosEntreRotas from "./pages/backend/dadosEntreRotas";
import Escalabilidade from "./pages/backend/escalabilidade";
import Package from "./pages/backend/package";
import MysqlEorm from "./pages/backend/mysqlEorm";
// import Status from "./pages/backend/status"
// import Env from "./pages/backend/env"
// import ServicoAutenticacao from "./pages/backend/servicoAutenticacao"

import { LayoutBancoDeDados } from "./ui/components/bancoDeDados/layout"; //template-grid (banco de dados)
import ModelagemDados from "./pages/bancoDados/01modelagemDados";

import { LayoutFrontend } from "./ui/components/frontend/layout"; //template-grid (frontend)
import Animations from "./pages/frontend/animations";
import ImageFullwindow from "./pages/frontend/imageFullwindow";
import Upload from "./pages/frontend/uploadVideo";
import Degrade from "./pages/frontend/degrade";
import Coracao from "./pages/frontend/coracao";
import DesignUX from "./pages/frontend/designUX";
import DesignUI from "./pages/frontend/designUI";
import DicasReact from "./pages/frontend/dicasReact";
import SiteCod3r from "./pages/frontend/siteCod3r/Components/Layout";
import FrontendHome from "./pages/frontend/frontendHome";
import FundamentosWeb from "./pages/frontend/fundamentosWeb";
import StyledComponents from "./pages/frontend/styledComponents";
import SettingReact from "./pages/frontend/settingReact";
import Hooks from "./pages/frontend/hooks";
import HTML from "./pages/frontend/html";
import Crud from "./pages/frontend/crud";
import List from "./pages/frontend/list";
import TiposDadosArgumentos from "./pages/frontend/tiposDadosArgumentos";
import Localization from "./pages/frontend/localization";
import EfeitoMatriz from "./pages/frontend/efeitoMatriz";
import PseudoElement from "./pages/frontend/pseudoElement";
import UseEffect from "./pages/frontend/useEffect";
import UseRef from "./pages/frontend/useRef";
import UseReducer from "./pages/frontend/useReducer";
import UseContext from "./pages/frontend/useContext";
import Context from "./pages/frontend/context";
import Redux from "./pages/frontend/redux";
import UseMemo from "./pages/frontend/useMemo";
import UseCallback from "./pages/frontend/useCallback";
import UseState from "./pages/frontend/useState";
import MudandoEstadoArray from "./pages/frontend/mudandoEstadoArray";
import ComponentVideoDesktop from "./ui/components/ytDesktop";
import ComponentVideo from "./ui/components/ytMobile05";
import Test from "./pages/tests";
import DirectTopage from "./ui/components/directTopage";
import Catalogo from "./pages/templates/catalogo";
import LayoutCloneSiteCod3r from "./pages/templates/cod3r/layout";
import PageTriagulo from "./pages/frontend/triangulo";
import Projetos from "./pages/frontend/projetos";
// LAYOUT templates GRIDS
import { Display } from "./pages/frontend/layout/display";
import GridTemplateRows from "./pages/frontend/layout/gridTemplateRows";
import GridTemplateAreas from "./pages/frontend/layout/gridTemplateAreas";
import GridTemplate from "./pages/frontend/layout/gridTemplate";
import GridtemplateFixeHeader from "./pages/frontend/layout/gridtemplateFixeHeader";

// import Err from "./pages/Err/HookDentroCondicional"
import { LayoutSkill } from "./ui/components/skill";
import SkillHome from "./pages/skill/skillHome";

import GitHub from "./pages/gitHub";
import EventLoop from "./pages/eventLoop";

import TiposDropDown from "./pages/frontend/tiposDropDown";
import Transforms from "./pages/frontend/transforms";
import Transitions from "./pages/frontend/transitions";

import { LayoutJavaScript } from "./ui/components/JavaScript/layout"; //template-grid (JavaScript)
import Operators from "./pages/javascript/operators";
import TypeArray from "./pages/javascript/typeArray";
import TiposDadosArguments from "./pages/javascript/tiposDadosArguments";
import Paradigma from "./pages/javascript/homePageParadigma";
import Bhaskara from "./pages/javascript/bhaskara";
import ApiIntroducao from "./pages/javascript/apisIntroducao";
import Instancia from "./pages/javascript/instancia";

import { LayoutNext } from "./ui/components/next/layout";
import { NextHome } from "./pages/next/nextHome";

import { LayoutReactJS } from "./ui/components/reactJS/layout"; //template-grid (ReactJS)
import Started from "./pages/reactjs/started";
import UltimaVersaoReact from "./pages/reactjs/atualizarReact";
import ReactJSX from "./pages/reactjs/reactJSX";
import Memo from "./pages/reactjs/memo";
import EstilizacaoCSS from "./pages/reactjs/cssReact";
import Scss from "./pages/reactjs/scss";
import Settingreact from "./pages/reactjs/settingReact";
import DesignUIreact from "./pages/reactjs/designUI";
import DesignUxreact from "./pages/reactjs/designUX";
import HomeReactJS from "./pages/reactjs/home";
import DicasR from "./pages/reactjs/dicasReact";

import { Sites } from "./ui/components/site/layout";
import SitesPage from "./pages/site/home"

import Conteudos from "./ui/components/conteudos";

import { Hospedagem } from "./pages/hospedagem";
// import Microservicos from "./pages/Microservicos"

// import Library from "./pages/Library"
// import { useContext } from "react";
// import Html from "./pages/Html";

const AppRoutes = () => {
  return (
    <ImgProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LayoutGrid />} /> {/* início */}
          <Route path="/back-end" element={<LayoutBackend />}>
            {" "}
            {/* Backend */}
            <Route index element={<BackendHome />} />
            <Route path="sugestoes-gerais" element={<SugestoesGerais />} />
            <Route
              path="passar-dados-entre-rotas"
              element={<PassarDadosEntreRotas />}
            />
            <Route
              path="escalabilidade-de-projeto"
              element={<Escalabilidade />}
            />
            <Route
              path="framework-biblioteca-ferramenta"
              element={<Package />}
            />
            <Route path="mysql-puro-ou-orm" element={<MysqlEorm />} />
            {/* <Route path="status-code" element={<Status />} />
                        <Route path="env" element={<Env />} />
                        <Route path="servicos-autenticacao" element={<ServicoAutenticacao />} /> */}
          </Route>
          <Route path="/banco-de-dados" element={<LayoutBancoDeDados />}>
            <Route path="modelagem-de-dados" element={<ModelagemDados />} />
          </Route>
          <Route path="/front-end" element={<LayoutFrontend />}>
            {" "}
            {/* Frontend */}
            <Route index element={<FrontendHome />} />
            <Route path="image-full-window" element={<ImageFullwindow />} />
            <Route path="video-upload" element={<Upload />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="hook-effect" element={<UseEffect />} />
            <Route path="hook-ref" element={<UseRef />} />
            <Route path="hook-reducer" element={<UseReducer />} />
            <Route path="hook-context" element={<UseContext />} />
            <Route path="context" element={<Context />} />
            <Route path="redux" element={<Redux />} />
            <Route path="hook-memo" element={<UseMemo />} />
            <Route path="hook-callback" element={<UseCallback />} />
            <Route path="hook-state" element={<UseState />} />
            <Route path="design-ui" element={<DesignUI />} />
            <Route path="design-ux" element={<DesignUX />} />
            <Route path="dicas-react" element={<DicasReact />} />
            <Route path="coracao-batendo" element={<Coracao />} />
            <Route path="crud" element={<Crud />} />
            {/* <Route path="error-nao-cometer" element={<Err />} /> */}
            <Route path="tests" element={<Test />} />
            {/* <Route path="git-hub" element={<GitHub />} /> */}
            <Route
              path="tipos-dados-argumentos"
              element={<TiposDadosArgumentos />}
            />
            <Route path="degrade" element={<Degrade />} />
            <Route path="git-hub" element={<Localization />} />
            <Route path="localization" element={<Localization />} />
            <Route path="coder" element={<SiteCod3r />} />
            <Route path="drop-down-3-formas" element={<TiposDropDown />} />
            <Route
              path="pseudo-element-before-after"
              element={<PseudoElement />}
            />
            <Route path="styled-components" element={<StyledComponents />} />
            <Route path="create-app" element={<SettingReact />} />
            <Route path="efeito-matriz" element={<EfeitoMatriz />} />
            <Route path="transforms" element={<Transforms />} />
            <Route path="transitions" element={<Transitions />} />
            <Route path="animations" element={<Animations />} />
            <Route
              path="mudando-estado-array"
              element={<MudandoEstadoArray />}
            />
            <Route path="html" element={<HTML />} />
            <Route path="fundamentos-web" element={<FundamentosWeb />} />
            <Route path="list" element={<List />} />
            <Route path="direcionar-para-pagina" element={<DirectTopage />} />
            <Route path="catalogo" element={<Catalogo />} />
            <Route path="cod3r" element={<LayoutCloneSiteCod3r />} />
            <Route path="triangulo" element={<PageTriagulo />} />
            <Route path="projetos-para-implementar" element={<Projetos />} />
          </Route>
          <Route path="display" element={<Display />} /> {/* Frontend */}
          <Route path="grid-template-rows" element={<GridTemplateRows />} />
          <Route path="grid-template-areas" element={<GridTemplateAreas />} />
          <Route path="grid-template" element={<GridTemplate />} />
          <Route
            path="grid-template-fixe-header"
            element={<GridtemplateFixeHeader />}
          />
          <Route path="/yt-mobile" element={<ComponentVideo />}></Route>
          <Route path="/yt-desktop" element={<ComponentVideoDesktop />}></Route>
          <Route path="/java-script" element={<LayoutJavaScript />}>
            <Route index element={<Paradigma />} />
            <Route path="operators" element={<Operators />} />
            <Route path="types" element={<TypeArray />} />
            <Route path="tipos-dados-arguments" element={<TiposDadosArguments />} />
            <Route path="bhaskara-fn" element={<Bhaskara />} />
            <Route path="apis-web-introducao" element={<ApiIntroducao />} />
            <Route path="instancias" element={<Instancia />} />
          </Route>

          <Route path="next-js" element={<LayoutNext />}>
            <Route index element={<NextHome />}></Route>
          </Route>

          <Route path="/react-js" element={<LayoutReactJS />}>
            <Route index element={<HomeReactJS />} />
            <Route path="react-started" element={<Started />} />
            <Route path="react-atualizar" element={<UltimaVersaoReact />} />
            <Route path="react-jsx" element={<ReactJSX />} />
            <Route path="react-memo" element={<Memo />} />
            <Route path="react-css-objeto" element={<EstilizacaoCSS />} />
            <Route path="react-scss" element={<Scss />} />
            <Route path="react-setting" element={<Settingreact />} />
            <Route path="design-ui" element={<DesignUIreact />} />
            <Route path="design-ux" element={<DesignUxreact />} />
            <Route path="dicas-react" element={<DicasR />} />
            <Route path="localization" element={<Localization />} />
            <Route
              path="tipos-dados-argumentos"
              element={<TiposDadosArgumentos />}
            />
            <Route
              path="mudando-estado-array"
              element={<MudandoEstadoArray />}
            />
            <Route path="list" element={<List />} />
            <Route path="crud" element={<Crud />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="hook-state" element={<UseState />} />
            <Route path="hook-effect" element={<UseEffect />} />
            <Route path="hook-ref" element={<UseRef />} />
            <Route path="hook-reducer" element={<UseReducer />} />
            <Route path="hook-context" element={<UseContext />} />
            <Route path="hook-memo" element={<UseMemo />} />
            <Route path="hook-callback" element={<UseCallback />} />
          </Route>
          <Route path="/conteudos-new-skills" element={<Conteudos />}></Route>
          <Route path="/git-hub" element={<GitHub />}></Route>
          <Route path="/skills" element={<LayoutSkill />}>
            <Route index element={<SkillHome />} />
          </Route>

          <Route path="sites-pesquisa" element={<Sites />}>
            <Route index element={<SitesPage />}></Route>
          </Route>
          <Route path="/arquitetura-node-js-entenda-loop-de-eventos" element={<EventLoop />} />

          <Route path="/hospedagem-qual-escolher" element={<Hospedagem />}></Route>
        </Routes>
      </Router>
    </ImgProvider>
  );
};
export default AppRoutes;
