
/* Configuração de arquivo Vite. Vai ser usado para configurar o servidor de desenvolvimento e a build do projeto 
 * Lembando que ainda preciso conceder permissão de acesso à localização para o navegador, caso contrário, o hook useGeolocation não vai funcionar e a aplicação não vai mostrar as informações de latitude e longitude
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
