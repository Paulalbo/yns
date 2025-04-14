import {addComponent} from './features/component-loader.js';
import {contentClasses} from './features/content-classes.js';
import {observeColor, observeProjects, observeSection} from './features/observer.js';


async function features() {
    await addComponent("teaser", "teaser");
    await addComponent("footer", "footer");
    contentClasses();;
}

export {features};
