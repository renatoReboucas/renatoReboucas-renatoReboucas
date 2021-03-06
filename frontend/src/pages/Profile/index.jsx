import React from 'react';
import { Link } from 'react-router-dom'

import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt=""/>
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button className="button">
          <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>
      <h1>Casos encontrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso testre</p>

          <strong>Descricao</strong>
          <p>Descrcao teste</p>
          
          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso testre</p>

          <strong>Descricao</strong>
          <p>Descrcao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso testre</p>

          <strong>Descricao</strong>
          <p>Descrcao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso testre</p>

          <strong>Descricao</strong>
          <p>Descrcao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
