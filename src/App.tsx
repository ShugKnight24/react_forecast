import { FC, KeyboardEvent, useState } from 'react';
import { Router } from 'react-router-dom';
import {
	Content,
	Drawer,
	Footer,
	Header,
	Layout,
	Main,
	Nav
} from './Components/Layout';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const App : FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	function closeDrawer (event? : KeyboardEvent<HTMLDivElement>){
		if (event){
			if (event.key === 'Enter'){
				setIsVisible(false);
			} else {
				return;
			}
		} else {
			setIsVisible(false);
		}
	}
	
	function openDrawer (event? : KeyboardEvent<HTMLDivElement>){
		if (event){
			if (event.key === 'Enter'){
				setIsVisible(true);
			} else {
				return;
			}
		} else {
			setIsVisible(true);
		}
	}
	
	return(
		<div className="weather-app">
			<Router history={ history }>
				<Layout>
					<Header
						title={'React Weather App'}
					/>
					<Nav />
					<div
						aria-expanded="false"
						role="button"
						tabIndex={ 0 }
						className="drawer-button"
						onClick={ () => openDrawer() }
						onKeyDown={ (event) => openDrawer(event) }
					>
						<i className="fa fa-bars"></i>
					</div>
					<Drawer
						title="Settings"
						isVisible={ isVisible }
					>
					</Drawer>
					<div
						className={`drawer-overlay ${ isVisible ? 'active' : '' }`}
						onClick={ () => closeDrawer() }
						onKeyDown={ (event) => closeDrawer(event) }
						role="button"
						tabIndex={ -1 }
					></div>
					<Content>
						<Main />
						<Footer />
					</Content>
				</Layout>
			</Router>
		</div>
	);
};
