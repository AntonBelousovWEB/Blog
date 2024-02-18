import React from 'react';
import { fetchTags } from '../../Fetch';

const Tags = () => {
    const [tags, setTags] = React.useState<string[] | null>(null);
    const [cachedTags, setCachedTags] = React.useState<string[] | null>(null);
    const [selectedTags, setSelectedTags] = React.useState<string[]>(() => {
        const storedTags = localStorage.getItem('selectedTags');
        return storedTags ? JSON.parse(storedTags) : [];
    });

    React.useEffect(() => {
        localStorage.setItem('selectedTags', JSON.stringify(selectedTags));
    }, [selectedTags]);

    const toggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index === -1) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            const updatedTags = [...selectedTags];
            updatedTags.splice(index, 1);
            setSelectedTags(updatedTags);
        }
    };

    React.useEffect(() => {
        fetchTags(cachedTags, setTags, setCachedTags);
    }, [cachedTags]);

    return (
        <div className='tags_wrap scroll'>
            {tags && tags.map((tag, index) => (
                <button key={index} onClick={() => toggleTag(tag)}>
                    {selectedTags.includes(tag) ? '✓ ' : ''}{tag}
                </button>
            ))}
        </div>
    );
};

export default Tags;