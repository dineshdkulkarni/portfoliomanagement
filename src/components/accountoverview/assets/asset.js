import BootstrapTable from 'react-bootstrap-table-next';
function Asset() {
  const products = [{"id":1, "name":"Bonds", "price":"$12321.12"},
  {"id":2, "name":"Shares", "price":"$45435334.12"},
  {"id":3, "name":"ETF", "price":"$45648.12"}];
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];
  return (
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Assets</h4>
              <BootstrapTable keyField='id' data={ products } columns={ columns } />
            </div>
          </div>
        </div>
  );
}
export default Asset;
