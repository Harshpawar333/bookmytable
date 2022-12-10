import './order.css'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

function Order() {
  return (
    <div className="order ">
      <ul className="orderButtons ">
        <Tabs>
          <TabList className="tabContainer ">
            <Tab className="btn btn-success buttons col-sm-2">New</Tab>
            <Tab className="btn btn-success buttons col-sm-2">Preparing</Tab>
            <Tab className="btn btn-success buttons col-sm-2">
              Bill Finalized
            </Tab>
            <Tab className="btn btn-success buttons col-sm-2">Completed</Tab>
          </TabList>
          <TabPanel className="tabtext">No Orders</TabPanel>
          <TabPanel className="tabtext">Nothing To Prepare</TabPanel>
          <TabPanel className="tabtext">Bills Cleared</TabPanel>
          <TabPanel className="tabtext">No Completed Orders</TabPanel>
        </Tabs>
      </ul>
    </div>
  )
}

export default Order
