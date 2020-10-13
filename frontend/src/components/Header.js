import React, {useState} from 'react';
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const menuIcon = (props) => <Icon {...props} name="menu-outline" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const Header = ({navigation, name}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    //navigation.toggleDrawer();
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <React.Fragment>
      {/* <TopNavigationAction icon={EditIcon} /> */}
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderBackAction = () => (
    <React.Fragment>
      <TopNavigationAction
        onPress={() => navigation.toggleDrawer()}
        icon={menuIcon}
      />
    </React.Fragment>
  );

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="center"
        title={name}
        //subtitle="Subtitle"
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 40,
  },
});
