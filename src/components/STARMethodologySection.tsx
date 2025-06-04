import React from 'react';
import IconRenderer from './IconRenderer';
import { STARMethodology } from '@/types/Project';

interface ProjectDetailsProps {
  star: STARMethodology;
}

const ProjectDetailsSection: React.FC<ProjectDetailsProps> = ({ star }) => {
  return (
    <div className="space-y-8 mb-12">
      {/* Contexto e Desafios */}
      <div className="brutal-box border-2 border-black dark:border-white p-6 bg-white dark:bg-black animate-fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-accent text-white flex items-center justify-center brutal-box">
            <IconRenderer iconName="target" className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Desafios e Oportunidades Iniciais</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Cenário Inicial:</h4>
            <p className="text-gray-700 dark:text-gray-300">{star.situation.context}</p>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Problema a Resolver:</h4>
            <p className="text-gray-700 dark:text-gray-300">{star.situation.problem}</p>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Oportunidade Identificada:</h4>
            <p className="text-gray-700 dark:text-gray-300">{star.situation.opportunity}</p>
          </div>
        </div>
      </div>

      {/* Objetivos e Responsabilidades */}
      <div className="brutal-box border-2 border-black dark:border-white p-6 bg-white dark:bg-black animate-fade-in-up animate-delay-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center brutal-box">
            <IconRenderer iconName="briefcase" className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Planejamento e Execução</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-secondary mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary after:mt-1">Meta Principal:</h4>
            <p className="text-gray-700 dark:text-gray-300">{star.task.objective}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-secondary mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary after:mt-1">Responsabilidades Assumidas:</h4>
              <ul className="space-y-1">
                {star.task.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-secondary mt-2 brutal-box flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-secondary mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary after:mt-1">Principais Desafios:</h4>
              <ul className="space-y-1">
                {star.task.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-secondary mt-2 brutal-box flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {star.task.newTechnologies && star.task.newTechnologies.length > 0 && (
            <div>
              <h4 className="font-bold text-secondary mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary after:mt-1">Tecnologias Estudadas:</h4>
              <div className="flex flex-wrap gap-2">
                {star.task.newTechnologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary/20 border-2 border-secondary text-sm font-bold brutal-box">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h4 className="font-bold text-secondary mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary after:mt-1">Funcionalidades Desenvolvidas:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {star.task.essentialFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-secondary mt-2 brutal-box flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Implementação e Soluções */}
      <div className="brutal-box border-2 border-black dark:border-white p-6 bg-white dark:bg-black animate-fade-in-up animate-delay-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center brutal-box">
            <IconRenderer iconName="zap" className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Soluções Técnicas Aplicadas</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-black dark:text-white mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-black dark:after:bg-white after:mt-1">Desenvolvimento Técnico:</h4>
            <ul className="space-y-2">
              {star.action.technicalImplementation.map((implementation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-black dark:bg-white mt-2 brutal-box flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{implementation}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-black dark:text-white mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-black dark:after:bg-white after:mt-1">Decisões Arquiteturais:</h4>
            <ul className="space-y-2">
              {star.action.keyDecisions.map((decision, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-black dark:bg-white mt-2 brutal-box flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{decision}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-black dark:text-white mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-black dark:after:bg-white after:mt-1">Estratégias Aplicadas:</h4>
            <ul className="space-y-2">
              {star.action.strategies.map((strategy, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-black dark:bg-white mt-2 brutal-box flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{strategy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Resultados e Impacto */}
      <div className="brutal-box border-2 border-black dark:border-white p-6 bg-white dark:bg-black animate-fade-in-up animate-delay-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-accent text-white flex items-center justify-center brutal-box">
            <IconRenderer iconName="trophy" className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Resultados e Aprendizados Chave</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Performance Alcançada:</h4>
              <ul className="space-y-1">
                {star.result.performance.map((perf, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent mt-1.5 brutal-box flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{perf}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Recepção e Feedback:</h4>
              <ul className="space-y-1">
                {star.result.impact.map((impact, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent mt-1.5 brutal-box flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Conquistas Técnicas:</h4>
              <ul className="space-y-1">
                {star.result.technicalAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent mt-1.5 brutal-box flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Principais Aprendizados:</h4>
              <ul className="space-y-1">
                {star.result.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent mt-1.5 brutal-box flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {star.result.futureImprovements && star.result.futureImprovements.length > 0 && (
          <div className="mt-6 pt-4 border-t-2 border-black dark:border-white">
            <h4 className="font-bold text-accent mb-2 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-accent after:mt-1">Próximas Evoluções:</h4>
            <ul className="space-y-1">
              {star.result.futureImprovements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent mt-1.5 brutal-box flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </div>
  );
};

export default ProjectDetailsSection;
