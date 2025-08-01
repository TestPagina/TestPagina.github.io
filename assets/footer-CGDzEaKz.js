(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i="/calendarIcon.png",l="/FromIcon.png",d="/listIcon.png",m="/TechIcon.png",u=i,f="https://outlook.office365.com/owa/calendar/8667a776adc440cb9bc967fe50c4b173@uartes.edu.ec/0c9fdb6cdd004bed8b175baa4556dc891274717747132370704/calendar.html";function y(s){document.querySelector(s).innerHTML=`
    <div class="container sticky-top">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-dark-subtle"> <a href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src=${m} alt="header image transversal technology" width="40px", height="40px">
        <span class="fs-4 ps-2"> Departamento de Transversal </span> </a>
        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
        <li>
            <a href="${f}" class="nav-link text-secondary">
            <img class="bi d-block mx-auto mb-1" src=${u} alt="calendar image" width="30px", height="30px">
            Calendario
            </a>
        </li>
        <li>
            <a href="/files/SolicitudDePrestamoUA.pdf" class="nav-link text-secondary" download>
            <img class="bi d-block mx-auto mb-1" src=${l} alt="calendar image" width="30px", height="30px">
            Formulario
            </a>
        </li>
        <li>
            <a href="/src/html/listado.html" class="nav-link text-secondary">
            <img class="bi d-block mx-auto mb-1" src=${d} alt="calendar image" width="30px", height="30px">
            Listado
            </a>
        </li>
        </ul>
    </header>
    </div>
    `}const p="/MZ_14_export_2.svg",h="/UA_LogoGrande_NoColor.png",b="https://www.uartes.edu.ec/sitio/",g="https://mz14.uartes.edu.ec/",a="100rem";function x(s){document.querySelector(s).innerHTML=`
    <div class="container sticky-bottom">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-dark-subtle">
        <div class="col-md-4 d-flex align-items-center">  <span class="mb-3 mb-md-0 text-body-secondary">© 2025 Universidad de las Artes</span> </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-body-secondary" href="${b}" aria-label="Instagram"><img src="${h}" width="${a}" height="${a}"></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="${g}" aria-label="Facebook"><img src="${p}" width="${a}" height="${a}"></a></li>
        </ul>
    </footer>
    </div>
    `}export{y as S,x as a};
