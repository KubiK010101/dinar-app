/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  contentContainerStyle: {
    width: '100%',
    paddingHorizontal: spacing.S22,
    paddingTop: getHeight(150),
    paddingBottom: spacing.S16,
  },
  content: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: scale(10),
    paddingHorizontal: spacing.S16,
  },

  // section
  sectionContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  sectionTitle: {
    marginTop: spacing.S16,
  },
  sectionItemContainer: {
    width: '100%',
  },
  sectionItem: {
    width: '100%',
    height: getHeight(48),

    borderColor: Colors.BORDER,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sectionItemTitle: {
    paddingHorizontal: spacing.S10,
  },
  sectionItemTitleAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionAlertContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#F7FAFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: scale(7),
    marginTop: spacing.S10,
  },
  sectionAlertText: {
    paddingHorizontal: spacing.S12,
  },
  listHeaderComponent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: spacing.S10,
  },
  versionAndBuildNumber: {
    marginTop: spacing.S22,
  },
});

export default styles;
