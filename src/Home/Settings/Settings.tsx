import React from "react";
import { Box, Content, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Notification from "./Notification";


const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
    return (
      <Content>
        <Box backgroundColor="background">
        <Header
            title="Ayarlar"
            left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
            right={{ icon: "share", onPress: () => true }}
        />
        <Box padding="m">
        <Notification
            title="Gün Sonu"
            description="Günlük bildirimleri alın"
          />
          <Notification
            title="İndirimler"
            description="Sevdiğiniz ürünleri ucuza alın"
          />
          <Notification
            title="Yeni Ürünler"
            description="Yeni eklenen ürünlerin bildirimini alın"
          />
          <Notification
            title="Yeni güncellemeler"
            description="Uygulamaya gelen yeniliklerle ilgili bildirim alın"
          />
        </Box>
        </Box>
        </Content>
    );
};

export default Settings;