import React ,{Component }from 'react';
import Aux from '../../auxillery/auxillery'
import classes from './layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer:false
    }
    sideDrawerClosed = () => {
        this.setState({showSideDrawer:false})
    }
    
    sideDrawerOpen = () => {
        this.setState((prevState) => { return {showSideDrawer:!prevState.showSideDrawer} })
     }
    render() {
        return(
        <Aux>
            <div>
                <Toolbar clicked2={this.sideDrawerOpen } />
                <SideDrawer closed={this.sideDrawerClosed} open={ this.state.showSideDrawer}/>
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )}
};

export default Layout