#include "lists.h"
#include <stdlib.h>
#include <stdio.h>
#include <stddef.h>
/**
 * insert_node - inserting in a sorted linked list
 * @head: head of the linked pointing to the first
 * @number: number to be inserted
 * Return: sorted linked list
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *new, *temp;

	temp = *head;

	new = malloc(sizeof(listint_t));

	if (new == NULL)
	{
		return (NULL);
	}

	new->n = number;
	new->next = NULL;
	if (temp == NULL)
    {
           *head = new;
		   return new;
	}			 


	else if(temp->n > number)
	{
		new->next = *head;
		*head = new;
		return (new);
	}
	else
	{
		while (temp->next != NULL)
		{
			if (temp->next->n >= number)
			{
				new->next = (*head)->next;
				(*head) = new;
				return new;
			}
			(*head) = (*head)->next;
		}
		new->next = NULL;
		(*head)->next = new;
		return new;
	}
	return (NULL);
}
