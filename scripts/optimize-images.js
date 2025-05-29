import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Pasta com as imagens originais
const PROJECTS_DIR = path.join(projectRoot, 'public', 'projects');

// Tamanhos para as imagens responsivas
const SIZES = [480, 768, 1024];

// Função para verificar se um arquivo é uma imagem
const isImage = (filename) => {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
};

// Função principal para otimizar as imagens
async function optimizeImages() {
  try {
    // Listar todas as pastas de projetos
    const projectFolders = await fs.readdir(PROJECTS_DIR);
    
    for (const folder of projectFolders) {
      const folderPath = path.join(PROJECTS_DIR, folder);
      const stats = await fs.stat(folderPath);
      
      if (!stats.isDirectory()) continue;
      
      console.log(`\nProcessando projeto: ${folder}`);
      
      // Listar arquivos do projeto
      const files = await fs.readdir(folderPath);
      
      for (const file of files) {
        if (!isImage(file)) continue;
        
        // Ignorar arquivos já otimizados
        if (file.includes('-optimized')) continue;
        
        const filePath = path.join(folderPath, file);
        const fileInfo = path.parse(filePath);
        
        console.log(`  Otimizando: ${file}`);
        
        // Carregar a imagem com sharp
        const image = sharp(filePath);
        const metadata = await image.metadata();
        
        // Para cada tamanho, criar uma versão otimizada
        for (const width of SIZES) {
          // Pular tamanhos maiores que a imagem original
          if (metadata.width <= width) continue;
          
          const outputPath = path.join(
            fileInfo.dir,
            `${fileInfo.name}-optimized-${width}${fileInfo.ext}`
          );
          
          console.log(`    → Criando versão ${width}px`);
          
          await image
            .clone()
            .resize({
              width,
              withoutEnlargement: true,
              fit: 'inside'
            })
            .webp({ quality: 80 })
            .toFile(outputPath.replace(fileInfo.ext, '.webp'));
            
          await image
            .clone()
            .resize({
              width,
              withoutEnlargement: true,
              fit: 'inside'
            })
            .jpeg({ quality: 80, progressive: true })
            .toFile(outputPath.replace(fileInfo.ext, '.jpg'));
            
          // Manter o formato original também
          await image
            .clone()
            .resize({
              width,
              withoutEnlargement: true,
              fit: 'inside'
            })
            .toFile(outputPath);
        }
        
        // Otimizar a imagem original também
        console.log(`    → Otimizando imagem original`);
        const optimizedOriginal = path.join(
          fileInfo.dir,
          `${fileInfo.name}-optimized${fileInfo.ext}`
        );
        
        await image
          .clone()
          .jpeg({ quality: 85, progressive: true })
          .toFile(optimizedOriginal.replace(fileInfo.ext, '.jpg'));
          
        await image
          .clone()
          .webp({ quality: 85 })
          .toFile(optimizedOriginal.replace(fileInfo.ext, '.webp'));
      }
    }
    
    console.log('\n✅ Otimização de imagens concluída com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro ao otimizar imagens:', error);
    process.exit(1);
  }
}

// Executar a função principal
optimizeImages(); 