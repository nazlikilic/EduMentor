import React, { useState } from 'react';
import PropTypes from "prop-types"
import { List, Card } from 'antd';

const EditorLayout = () => {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [trainings, setTrainings] = useState([
    { id: 1, title: 'Eğitim 1', description: 'Bu birinci eğitim açıklamasıdır.', videoUrl: 'video1.mp4' },
    { id: 2, title: 'Eğitim 2', description: 'Bu ikinci eğitim açıklamasıdır.', videoUrl: 'video2.mp4' },
    // Diğer eğitimler buraya eklenecek
  ]);

  const handleTrainingClick = (training) => {
    setSelectedTraining(training);
  };

  return (
    <div style={styles.container}>
      <div style={styles.listContainer}>
        <List
          dataSource={trainings}
          renderItem={(item) => (
            <List.Item>
              <div style={styles.trainingItem} onClick={() => handleTrainingClick(item)}>
                {item.title}
              </div>
            </List.Item>
          )}
        />
      </div>

      <div style={styles.mainContent}>
        {selectedTraining && (
          <Card title={selectedTraining.title} style={styles.card}>
            <video width="100%" controls>
              <source src={selectedTraining.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p style={styles.description}>{selectedTraining.description}</p>
          </Card>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  listContainer: {
    width: '30%',
    marginRight: '20px',
  },
  mainContent: {
    width: '60%',
  },
  trainingItem: {
    cursor: 'pointer',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  card: {
    marginBottom: '20px',
  },
  description: {
    marginTop: '20px',
  },
};


export default EditorLayout;
EditorLayout.PropTypes ={
    children:PropTypes.node
}
