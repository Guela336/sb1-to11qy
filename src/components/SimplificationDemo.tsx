import React, { useState } from 'react';
import { textSimplifier, SimplificationResult } from '../services/ai/textSimplification';

export function SimplificationDemo() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<SimplificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'camembert' | 'flaubert' | 'bloom'>('camembert');

  const handleSimplify = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    try {
      let simplificationResult;
      
      switch (selectedModel) {
        case 'camembert':
          simplificationResult = await textSimplifier.simplifyWithCamemBERT(inputText);
          break;
        case 'flaubert':
          simplificationResult = await textSimplifier.simplifyWithFlauBERT(inputText);
          break;
        case 'bloom':
          simplificationResult = await textSimplifier.simplifyWithLocalBLOOM(inputText);
          break;
      }
      
      setResult(simplificationResult);
    } catch (error) {
      console.error('Erreur de simplification:', error);
      // Fallback vers le modèle local
      try {
        const localResult = await textSimplifier.simplifyWithLocalBLOOM(inputText);
        setResult(localResult);
      } catch (fallbackError) {
        console.error('Erreur avec le modèle local:', fallbackError);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Démo de Simplification FALC</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sélectionner le modèle IA
        </label>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value as any)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 mb-4"
        >
          <option value="camembert">CamemBERT (Recommandé)</option>
          <option value="flaubert">FlauBERT</option>
          <option value="bloom">BLOOM (Local)</option>
        </select>

        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          rows={5}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Entrez le texte à simplifier..."
        />
      </div>

      <button
        onClick={handleSimplify}
        disabled={isLoading || !inputText.trim()}
        className={`px-4 py-2 rounded-lg ${
          isLoading
            ? 'bg-gray-400'
            : 'bg-indigo-600 hover:bg-indigo-700'
        } text-white font-semibold`}
      >
        {isLoading ? 'Simplification en cours...' : 'Simplifier le texte'}
      </button>

      {result && (
        <div className="mt-6">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Texte original :</h3>
            <p className="p-3 bg-gray-50 rounded">{result.original}</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Texte simplifié :</h3>
            <p className="p-3 bg-indigo-50 rounded">{result.simplified}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Score de confiance :</h3>
            <div className="bg-gray-200 rounded-full h-4 w-full">
              <div
                className="bg-indigo-600 rounded-full h-4"
                style={{ width: `${result.confidence * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <p>{(result.confidence * 100).toFixed(1)}% de confiance</p>
              <p>Modèle utilisé : {result.model}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}