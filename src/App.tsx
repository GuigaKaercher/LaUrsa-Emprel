
import { ButtonPrimary } from './components/ButtonPrimary';
import { ButtonPrimaryIcon } from './components/ButtonPrimaryIcon';

function App() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">
        LaUrsa
      </h1>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">Default State:</p>
          <ButtonPrimary>Button Label</ButtonPrimary>
        </div>
        
        <div>
          <p className="text-sm text-gray-600 mb-2">Disabled State:</p>
          <ButtonPrimary disabled>Button Label</ButtonPrimary>
        </div>
        
        <div>
          <p className="text-sm text-gray-600 mb-2">Loading State:</p>
          <ButtonPrimary loading></ButtonPrimary>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">ButtonPrimaryIcon Component</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Default State:</p>
              <ButtonPrimaryIcon>Button Label</ButtonPrimaryIcon>
            </div>
            
            
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Disabled State:</p>
              <ButtonPrimaryIcon disabled>Button Label</ButtonPrimaryIcon>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Loading State:</p>
              <ButtonPrimaryIcon loading></ButtonPrimaryIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App