<?php

namespace App\Services;

use App\Models\Message;
use App\Models\Forbiddenword;
use App\Models\Forbiddenwordexception;
use App\Models\Sitevariable;

class GlobalService
{
	public function getMessageList()
	{
		try {
			$messages = Message::find();

			if (!$messages) {
				return [];
			}

			$data = [];
			foreach ($messages as $message) {
				$data[$message->message_id] = $message->message;
				$data["title_" . $message->message_id] = $message->title;
			}

			$result = [];
			$result["success"] = true;
			$result["data"] = $data;

			return $result;
		} catch (\PDOException $e) {
			throw new ServiceException($e->getMessage(), $e->getCode(), $e);
		}
	}

	public function getForbiddenList()
	{
		try {
			$forbiddenwords = Forbiddenword::find();
			$forbiddenWordExceptions = Forbiddenwordexception::find();

			if (!$forbiddenwords && !forbiddenWordException) {
				return [];
			}

			$words = [];
			foreach ($forbiddenwords as $forbiddenword) {
				array_push($words,$forbiddenword->forbiddenword);
			}

			$exceptions = [];
			foreach ($forbiddenWordExceptions as $forbiddenWordException) {
				array_push($exceptions,$forbiddenWordException->exception);
			}


			$result = [];
			$result["success"] = true;
			$result["words"] = $words;
			$result["exception"] = $exceptions;

			return $result;
		} catch (\PDOException $e) {
			throw new ServiceException($e->getMessage(), $e->getCode(), $e);
		}
	}

	public function getSiteVariableList()
	{
		try {
			$siteVariable = Sitevariable::find();

			if (!$siteVariable) {
				return [];
			}
			$data = [];
			foreach ($siteVariable as $var) {
				$data[$var->sitevariable_id] = $var->value;
			}

			$result = [];
			$result["success"] = true;
			$result["variables"] = $data;

			return $result;
		} catch (\PDOException $e) {
			throw new ServiceException($e->getMessage(), $e->getCode(), $e);
		}
	}
}
