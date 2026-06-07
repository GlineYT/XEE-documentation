// Auto-escape all .code blocks on page load
function escapeCodeBlocks() {
    document.querySelectorAll('.code').forEach(block => {
        // Get the raw HTML content
        const rawContent = block.innerHTML;
        // Escape all < and > but preserve existing &lt; and &gt;
        const escaped = rawContent.replace(/&(?!lt;|gt;|amp;)/g, '&amp;')
                                   .replace(/</g, '&lt;')
                                   .replace(/>/g, '&gt;');
        block.innerHTML = `<pre>${escaped}</pre>`;
    });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', escapeCodeBlocks);

