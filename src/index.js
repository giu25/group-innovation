import React from 'react';
import ReactDOM from 'react-dom';
import Contatti from './Contatti';
import Project from './Project';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import '../node_modules/primereact/resources/primeng.min.css';
import '../node_modules/primereact/resources/themes/omega/theme.css';


window.$(document).ready(function () {
    window.$.getJSON({
        url: "https://innovationspark-3f75b.firebaseio.com/projects.json"
    })

        .done(function (data) {
            data.forEach(function (element) {
                var progetto =
                `<div class="col-lg-4 col-sm-6">
                    <a href="${element.image}" class="portfolio-box">
                        <img src="${element.image}" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    ${element.category}
                                </div>
                                <div class="project-name">
                                    ${element.name}
                                </div>
                                <div class="project-progress barra" id="progress-${element.id}">
                                    Progress: ${element.progress}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>`;
                window.$(progetto).appendTo("#projectslist");
                ReactDOM.render(<Project percentage={element.progress*10}/>, document.getElementById('progress-'+element.id));
            });
        })
})

ReactDOM.render(<Contatti />, document.getElementById('root'));
registerServiceWorker(); 
ReactDOM.render(<Project />, document.getElementById('projectslist'));