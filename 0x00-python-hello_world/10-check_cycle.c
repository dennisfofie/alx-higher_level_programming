#include "lists.h"
/**
 * check_cycle - function to check a cycle in a linked list
 * @list: list to be transverse
 * Return: 1 if cycle is in the list and 0 if not
 */
int check_cycle(listint_t *list)
{
	listint_t *slow;
	listint_t *fast;

	slow = list;
	fast = list;

	while (slow != NULL && fast != NULL)
	{
		slow = slow->next;

		if (fast->next)

			fast = fast->next->next;

		if (fast == slow)
		{
			return (1);
		}
	}
	return (0);
}
