export interface Deck {
	name: string;
	description: string | null;
	cards: Card[];
}

export interface Card {
	front: string;
	back: string;
}

export function newDeck(name: string, description?: string): Deck {
	return {
		name,
		description: description || null,
		cards: []
	};
}

export function isValidDeck(deck: any): deck is Deck {
	if (typeof deck !== 'object') return false;
	if (typeof deck.name !== 'string') return false;
	if (typeof deck.description !== 'string' && deck.description !== null) return false;
	if (!Array.isArray(deck.cards)) return false;
	const cards = deck.cards as Array<any>;

	// Check if all cards are valid
	for (const card of cards)
		if (typeof card !== 'object' || typeof card.front !== 'string' || typeof card.back !== 'string')
			return false;

	return true;
}
