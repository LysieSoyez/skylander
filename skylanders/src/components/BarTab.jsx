import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllCardsPage from "../pages/AllCards";
import WishList from "../pages/WishList";

function BarTab() {
  return (
    <div className="barTab">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em" fontFamily="Madimi One">
          <Tab>All Skylanders</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AllCardsPage />
          </TabPanel>
          <TabPanel>
            <WishList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default BarTab;
