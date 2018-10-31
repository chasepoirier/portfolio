import { toggleMobileNav } from 'ducks/layout/operations'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ReduxState } from 'src/types/redux'
import { animateMobileLinks } from 'utils/animations'

interface Props {
  menu: ReduxState['layout']['mobile']['menu']
  toggleMenu: typeof toggleMobileNav
}

class MobileNav extends React.Component<Props> {
  public componentDidUpdate(prevProps: Props) {
    if (prevProps.menu.active !== this.props.menu.active) {
      animateMobileLinks(this.props.menu.active)
    }
  }

  public handleHamburgerClick = () => {
    this.props.toggleMenu(!this.props.menu.active)
  }

  public render() {
    const { menu } = this.props
    return (
      <div className="mobile-container">
        <div
          onClick={this.handleHamburgerClick}
          className={menu.active ? 'hamburger active' : 'hamburger'}
        >
          <div className="patty" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  menu: state.layout.mobile.menu
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleMenu: (toggle: boolean) => dispatch(toggleMobileNav(toggle))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNav)
