import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: palette.black,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: HDP(14),
    gap: HDP(20),
    backgroundColor: '#112D42',
  },
  searchBox: {
    backgroundColor: '#f5f5f5',
    borderWidth: 0,
  },
  maintext: {
    fontSize: RF(18),
    color: '#092C4C',
    fontFamily: family.Bold,
    paddingLeft: HDP(24),
  },
  heroSection: {
    backgroundColor: '#FD8136',
    flexDirection: 'row',
    paddingHorizontal: HDP(14),
    paddingTop: HDP(34),
    paddingBottom: HDP(65),
    alignItems: 'center',
    position: 'relative',
  },
  aviRound: {
    backgroundColor: '#fff',
    borderRadius: HDP(100),
    height: HDP(80),
    width: HDP(80),
  },
  optItem: {
    flexDirection: 'row',
    gap: HDP(20),
    alignItems: 'center',
    marginBottom: HDP(20),
    alignSelf: 'center',
  },
  optBox: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: width * 0.9,
    borderRadius: HDP(20),
    paddingTop: HDP(70),
    paddingBottom: HDP(50),
    alignItems: 'center',
    zIndex: 99999,
    top: HDP(-50),
    justifyContent: 'center',
    elevation: 999,
  },
  optText: {
    fontSize: RF(14),
    color: '#092C4C',
    fontFamily: family.Medium,
  },
});

export default styles;
