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

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const ProfileIcon = (props) => <Icon {...props} name="person-outline" />;

const menuIcon = (props) => <Icon {...props} name="menu-outline" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

const AddIcon = (props) => <Icon {...props} name="plus-outline" />;

export const Header = ({navigation, name}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    //navigation.toggleDrawer();
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => {
    switch (name) {
      case 'Home':
        return (
          <React.Fragment>
            <OverflowMenu
              anchor={renderMenuAction}
              visible={menuVisible}
              onBackdropPress={toggleMenu}>
              <MenuItem
                accessoryLeft={HomeIcon}
                title="Add Home"
                onPress={() => navigation.navigate('addHome')}
              />
              <MenuItem
                accessoryLeft={ProfileIcon}
                title="Add Friends"
                onPress={() => navigation.navigate('addUser')}
              />
            </OverflowMenu>
          </React.Fragment>
        );
      case 'Devices':
        return (
          <React.Fragment>
            <MenuItem
              accessoryRight={AddIcon}
              onPress={() => navigation.navigate('addDevice')}
            />
          </React.Fragment>
        );
      case 'Reminders':
        return (
          <React.Fragment>
            <MenuItem
              accessoryRight={AddIcon}
              onPress={() => navigation.navigate('addReminder')}
            />
          </React.Fragment>
        );
      default:
        return <React.Fragment></React.Fragment>;
    }
  };

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
    paddingTop: 40,
  },
});
