document.addEventListener('DOMContentLoaded', () => {
    const dynamicFeature = document.querySelector('.dynamic-feature');
    
    dynamicFeature.addEventListener('click', () => {
        alert('This is a dynamic feature!');
    });
});
