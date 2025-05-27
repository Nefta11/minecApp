import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../utils/Colors';

interface LogoutModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const { width } = Dimensions.get('window');

const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>¿Estás seguro que deseas salir del curso?</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmText}>Sí, salir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    padding: 10,
    width: width * 0.45,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
  },
  title: {
    fontSize: width * 0.032,
    fontWeight: '700',
    color: Colors.Black,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.DavysGrey,
    borderRadius: 6,
    paddingVertical: 6,
    marginRight: 4,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: Colors.PrimaryYellow,
    borderRadius: 6,
    paddingVertical: 6,
    marginLeft: 4,
    alignItems: 'center',
  },
  cancelText: {
    color: Colors.White,
    fontWeight: '600',
    fontSize: width * 0.026,
  },
  confirmText: {
    color: Colors.Black,
    fontWeight: '700',
    fontSize: width * 0.026,
  },
});

export default LogoutModal;
