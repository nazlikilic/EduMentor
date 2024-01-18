import React, { useState } from 'react';
import { Upload, Button, Input, Select, Typography } from 'antd';
import PropTypes from "prop-types"
import { UploadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const AdminLayout = () => {
  const [trainerName, setTrainerName] = useState('');
  const [trainingArea, setTrainingArea] = useState('');
  const [trainingDescription, setTrainingDescription] = useState('');

  const handleTrainerNameChange = (value) => {
    setTrainerName(value);
  };

  const handleTrainingAreaChange = (value) => {
    setTrainingArea(value);
  };

  const handleTrainingDescriptionChange = (e) => {
    setTrainingDescription(e.target.value);
  };

  const handleUpload = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} dosyası başarıyla yüklendi`);
    } else if (info.file.status === 'error') {
      console.error(`${info.file.name} dosyası yüklenirken hata oluştu.`);
    }
  };

  const handleUploadClick = () => {
    // Eğitimi yükle butonuna tıklandığında yapılacak işlemleri buraya ekleyebilirsiniz
  };

  return (
    <div>
      <Title level={2}>Eğitim Yükle</Title>

      <div>
        <Text>Eğitmen Adı:</Text>
        <Input onChange={(e) => handleTrainerNameChange(e.target.value)} />
      </div>

      <div>
        <Text>Yüklenmek İstenen Eğitim Alanı:</Text>
        <Select style={{ width: 200 }} onChange={handleTrainingAreaChange}>
          <Option value="web">Web Geliştirme</Option>
          <Option value="mobile">Mobil Uygulama Geliştirme</Option>
          <Option value="data">Veri Bilimi</Option>
          <Option value="game">Oyun Geliştirme</Option>
        </Select>
      </div>

      <div>
        <Text>Eğitim Açıklaması:</Text>
        <Input.TextArea rows={4} onChange={handleTrainingDescriptionChange} />
      </div>

      <div>
        <Text>Videoların Yükleneceği Yer:</Text>
        <Upload onChange={handleUpload}>
          <Button icon={<UploadOutlined />}>Dosya Yükle</Button>
        </Upload>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Button type="primary" onClick={handleUploadClick}>
          Eğitimi Yükle
        </Button>
      </div>
    </div>
  );
};

export default AdminLayout;
AdminLayout.PropTypes ={
    children:PropTypes.node
}


