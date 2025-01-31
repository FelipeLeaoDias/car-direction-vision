import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

export function CarVision() {
  const [videoSrc, setVideoSrc] = useState(""); // Estado para armazenar o vídeo carregado
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  // Função para lidar com o upload do vídeo
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
  };

  // Funções para controlar os vídeos
  const handlePlayVideos = () => {
    if (videoRef1.current && videoRef2.current) {
      videoRef1.current.play();
      videoRef2.current.play();
    }
  };

  const handlePauseVideos = () => {
    if (videoRef1.current && videoRef2.current) {
      videoRef1.current.pause();
      videoRef2.current.pause();
    }
  };

  const handleRestartVideos = () => {
    if (videoRef1.current && videoRef2.current) {
      videoRef1.current.currentTime = 0;
      videoRef2.current.currentTime = 0;
      videoRef1.current.pause();
      videoRef2.current.pause();
    }
  };

  return (
    <PageWrapper>
      <Header />
      <Content>
        <UploadSection>
          <UploadLabel htmlFor="videoUpload">
            <StyledUploadButton>Selecionar Vídeo</StyledUploadButton>
          </UploadLabel>
          <UploadInput
            id="videoUpload"
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
          />
        </UploadSection>
        {videoSrc && (
          <>
            <VideoSection>
              <VideoWrapper>
                <VideoPlayer ref={videoRef1} src={videoSrc} controls={false} />
                <VideoLabel>Vídeo Original</VideoLabel>
              </VideoWrapper>
              <VideoWrapper>
                <VideoPlayer ref={videoRef2} src={videoSrc} controls={false} />
                <VideoLabel>Vídeo Tratado</VideoLabel>
              </VideoWrapper>
            </VideoSection>
            <MessageBox>Siga em frente</MessageBox>
            <ButtonSection>
              <ControlButton onClick={handlePlayVideos}>Play</ControlButton>
              <ControlButton onClick={handlePauseVideos}>Pause</ControlButton>
              <ControlButton onClick={handleRestartVideos}>Reiniciar</ControlButton>
            </ButtonSection>
          </>
        )}
      </Content>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: flex-start; /* Mantém o conteúdo colado no topo */
  gap: 20px;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os elementos filhos horizontalmente */
  gap: 20px;
  width: 100%;
`;

const UploadSection = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o botão */
  width: 100%;
`;

const UploadLabel = styled.label`
  cursor: pointer;
`;

const StyledUploadButton = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #007bff;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const VideoSection = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center; /* Centraliza os vídeos horizontalmente */
  width: 100%;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%; /* Ajusta a largura dos vídeos */
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

const VideoLabel = styled.span`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;

const MessageBox = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #000000;
  text-align: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
  border: 5px solid #707070;
  border-radius: 8px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os botões */
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
`;

const ControlButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
