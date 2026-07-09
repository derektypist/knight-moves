$('#results').html(``);

const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
const rows = [1, 2, 3, 4, 5, 6, 7, 8];
$('#knight-col').html(``);
$('#knight-row').html(``);
$.each(columns, function (idx, row) {
    $('#knight-col').append($("<option>", {
        value: idx,
        text: row
    }));
});
$.each(rows, function (idx, row) {
    $('#knight-row').append($("<option>", {
        value: idx,
        text: row
    }));
});

// Function to return the number of valid squares or possible positions
function knightMoves(position, showMoves) {
    let x = position[0].charCodeAt();
    let y = parseInt(position[1]);
    const moves = [[1, 2], [-1, -2], [-1, 2], [1, -2], [2, 1], [-2, -1], [2, -1], [-2, 1]];
    let availablePositions = [];
    for (const move of moves) {
        if ((x + move[0] < 65 || x + move[0] > 72) || (y + move[1] < 1 || y + move[1] > 8)) continue;
        availablePositions.push(`${String.fromCharCode(x + move[0])}${y + move[1]}`);
    }

    return showMoves ? availablePositions.sort() : availablePositions.length;
}

// Apply Change Events
$('#knight-col').on('change', () => {
    $('#results').html(``);
    const showMoves = $('#show-moves').is(':checked');
    const column = $('#knight-col :selected').text();
    const row = $('#knight-row :selected').text();
    const position = `${column}${row}`;
    $('#results').append(`Position ${position} <br>`);
    $('#results').append(`${showMoves ? "Possible move(s) to " + knightMoves(position, showMoves) : knightMoves(position, showMoves) + " valid square(s)"} <br>`);
});

$('#knight-row').on('change', () => {
    $('#results').html(``);
    const showMoves = $('#show-moves').is(':checked');
    const column = $('#knight-col :selected').text();
    const row = $('#knight-row :selected').text();
    const position = `${column}${row}`;
    $('#results').append(`Position ${position} <br>`);
    $('#results').append(`${showMoves ? "Possible move(s) to " + knightMoves(position, showMoves) : knightMoves(position, showMoves) + " valid square(s)"} <br>`);
});

// Apply Click Events
$('#show-moves').on('click', () => {
    $('#results').html(``);
    const showMoves = $('#show-moves').is(':checked');
    const column = $('#knight-col :selected').text();
    const row = $('#knight-row :selected').text();
    const position = `${column}${row}`;
    $('#results').append(`Position ${position} <br>`);
    $('#results').append(`${showMoves ? "Possible move(s) to " + knightMoves(position, showMoves) : knightMoves(position, showMoves) + " valid square(s)"} <br>`);
});

$('#clearBtn').on('click', () => {
    $('#results').html(``);
});
