document.addEventListener('DOMContentLoaded', (event) => {
    let receivedCount = 0;
    let transferredCount = 0;
    let lastAction = null;

    const receivedButton = document.getElementById('receivedButton');
    const transferredButton = document.getElementById('transferredButton');
    const undoButton = document.getElementById('undoButton');
    const receivedCountDisplay = document.getElementById('receivedCount');
    const transferredCountDisplay = document.getElementById('transferredCount');
    const totalCountDisplay = document.getElementById('totalCount');

    const updateTotalCount = () => {
        const totalCount = receivedCount + transferredCount;
        totalCountDisplay.textContent = totalCount;
    };

    receivedButton.addEventListener('click', () => {
        receivedCount++;
        receivedCountDisplay.textContent = receivedCount;
        updateTotalCount();
        lastAction = 'received';
    });

    transferredButton.addEventListener('click', () => {
        transferredCount++;
        transferredCountDisplay.textContent = transferredCount;
        updateTotalCount();
        lastAction = 'transferred';
    });

    undoButton.addEventListener('click', () => {
        if (lastAction === 'received' && receivedCount > 0) {
            receivedCount--;
            receivedCountDisplay.textContent = receivedCount;
        } else if (lastAction === 'transferred' && transferredCount > 0) {
            transferredCount--;
            transferredCountDisplay.textContent = transferredCount;
        }
        updateTotalCount();
        lastAction = null; // Zurücksetzen der letzten Aktion
    });
});
