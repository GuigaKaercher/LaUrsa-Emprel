
import { ButtonPrimary } from './components/buttons/ButtonPrimary';
import { ButtonPrimaryIcon } from './components/buttons/ButtonPrimaryIcon';
import { ButtonSecondary } from './components/buttons/ButtonSecondary';
import { ButtonSecondaryIcon } from './components/buttons/ButtonSecondaryIcon';
import {AvatarImg} from './components/avatars/AvatarImg'
import InputSearchPrimary from './components/inputs/inputSeachPrimary';
import InputSearchSecondary from './components/inputs/inputSearchSecondary';
import InputFilter from './components/inputs/inputFilter';


function App() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">
        LaUrsa
      </h1>
      
      <div className="space-y-4">
        <h1>ButtonPrimary</h1>
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
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">ButtonSecondary Component</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Default State:</p>
              <ButtonSecondary>Button Label</ButtonSecondary>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Disabled State:</p>
              <ButtonSecondary disabled>Button Label</ButtonSecondary>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Loading State:</p>
              <ButtonSecondary loading></ButtonSecondary>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">ButtonSecondaryIcon Component</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Default State:</p>
              <ButtonSecondaryIcon>Button Label</ButtonSecondaryIcon>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Disabled State:</p>
              <ButtonSecondaryIcon disabled>Button Label</ButtonSecondaryIcon>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Loading State:</p>
              <ButtonSecondaryIcon loading></ButtonSecondaryIcon>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">AvatarImg Component</h2>
          
          <div className="flex items-end gap-6">
            <div className="text-center">
              <AvatarImg 
                size="Large" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Avatar SM" 
              />
              
            </div>
            
          </div>
        </div>
        
        
        <div className="mt-8">
          <h2 className='text-xl font-bold mb-4'>Input Components</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">InputSearchPrimary - Default:</p>
              <InputSearchPrimary/>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">InputSearchPrimary - Disabled:</p>
              <InputSearchPrimary disabled/>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">InputSearchSecondary - Default:</p>
              <InputSearchSecondary/>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">InputSearchSecondary - Disabled:</p>
              <InputSearchSecondary disabled/>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">InputFilter - Default:</p>
              <InputFilter/>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">InputFilter - Disabled:</p>
              <InputFilter disabled/>
            </div>
          </div>
        </div>
        
        </div>
      </div>
  )
}

export default App