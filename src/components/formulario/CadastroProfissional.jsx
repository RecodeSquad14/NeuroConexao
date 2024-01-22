"use client";
import React, { useState } from "react";


const CadastroProfissional = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    areaAtuacao: '',
    crp: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add API
    console.log('Dados do formulário:', formData);
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2%',
      padding: '3px',
      borderRadius: '2px',
      boxShadow: '10px solid #ffffff',
      width: '100%', 
    },
    
    h3: {
      fontSize: '200%',
      fontWeight: 'light',
      textAlign: 'center',
    },
  
    formGroup: {
      marginBottom: '10px',
    },
    label: {
      display: 'block',
      fontWeight: 'lighter',
      color: '#000000 ', 
    },
    input: {
      width: '100%',
      padding: '5px',
      fontSize: '16px',
      border: '1px solid #000000',
      borderRadius: '4px',
    },
   
    button: {
      color: '#000000',
      padding: '10px 15px',
      fontSize: '15px',
      border: '1px solid #000000',
      borderRadius: '8px',
      cursor: 'pointer', 
      marginLeft:'auto',
      marginTop: 'auto',
    },
  
  };

  return (
    
    <div style={styles.body}>
      <h3 style={styles.h3}>Cadastro do Profissional</h3>
      <div style={styles.container} className="cadastro-form">
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Nome:
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} 
                placeholder="Insira seu nome" style={styles.input} />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              CPF:
              <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} 
                placeholder="Insira seu CPF"style={styles.input} />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Área de Atuação:
              <input type="text" name="areaAtuacao" value={formData.areaAtuacao} onChange={handleChange} 
              placeholder="Insira aqui sua área de atuação"style={styles.input} />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              CRP:
              <input type="text" name="crp" value={formData.crp} onChange={handleChange} 
              placeholder="Insira seu CRP" style={styles.input} />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              E-mail:
              <input type="email" name="email" value={formData.email} onChange={handleChange} 
              placeholder="Insira seu email"style={styles.input} />
            </label>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Senha:
              <input type="password" name="senha" value={formData.senha} onChange={handleChange} 
              placeholder="Insira uma senha" style={styles.input} />
            </label>
          </div>
      
          <button type="submit" style={styles.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroProfissional;

