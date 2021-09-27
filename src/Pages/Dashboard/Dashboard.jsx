import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import socket from '../../socket';

const Dashboard = ({ user }) => {
  useEffect(() => {
    //CDM
    socket.connect();

    //setting up noticfication listener
    socket.on('notification', (data) => {
      console.log(data);
    });

    //CWU
    return () => {
      console.log('CWU');
      socket.disconnect(); // socket.emit("disconnect")
    };
  }, []);

  useEffect(() => {
    socket.emit('online', user.userId);
  }, [user]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const mapState = (state) => ({
  user: state.auth,
});

export default connect(mapState)(Dashboard);
