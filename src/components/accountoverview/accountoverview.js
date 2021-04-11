import Asset from './assets/asset'
import Balance from './balances/balance'
import Holdings from './holdings/holdings'

function AccountOverView() {
    return (
        <div className="row">
          <Asset></Asset>
          <Balance></Balance>
          <Holdings></Holdings>
        </div>
    );
  }
  export default AccountOverView;