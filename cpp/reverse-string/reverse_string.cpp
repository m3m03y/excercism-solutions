#include "reverse_string.h"
#include <string>

// Reverse string that swaps the letters
namespace reverse_string {

	std::string reverse_string(std::string originalString)
	{
		for (std::size_t i = 0; i < originalString.length() / 2; i++)
		{
			std::swap(originalString[i],originalString[originalString.length() - i - 1]);
		}
		
		return originalString;
	}
}  // namespace reverse_string
