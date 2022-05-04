import { useState } from 'react';
import { ChatTeardropDots} from 'phosphor-react';

export const Widget = () => {

    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    const toggleWidgetVisibility = () => {
        setIsWidgetOpen(!isWidgetOpen);
    };

    return (
        <div className="absolute right-5 bottom-5">
            {isWidgetOpen && <p>Hello World</p>}
            <button
                onClick={toggleWidgetVisibility}
                className="flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </button>
        </div>
    );
}